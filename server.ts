import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = 3000;

async function startServer() {
  const app = express();
  app.use(express.json());

  app.get('/api/line/status', (_req, res) => {
    const messagingApiConfigured = Boolean(process.env.LINE_CHANNEL_ACCESS_TOKEN?.trim());
    res.json({ messagingApiConfigured });
  });

  app.get('/api/line/profile', async (req, res) => {
    const mid = typeof req.query.mid === 'string' ? req.query.mid.trim() : '';
    const fallbackName = typeof req.query.name === 'string' ? req.query.name.trim() : '';
    const token = process.env.LINE_CHANNEL_ACCESS_TOKEN?.trim();
    const messagingApiConfigured = Boolean(token);

    if (!mid) {
      res.status(400).json({ error: 'Missing mid parameter', messagingApiConfigured });
      return;
    }

    if (token) {
      try {
        const lineResp = await fetch(`https://api.line.me/v2/bot/profile/${encodeURIComponent(mid)}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (lineResp.ok) {
          const profile = (await lineResp.json()) as {
            userId?: string;
            displayName?: string;
            pictureUrl?: string;
          };
          res.json({
            mid: profile.userId || mid,
            displayName: profile.displayName || fallbackName || 'สมาชิก LINE',
            pictureUrl: profile.pictureUrl,
            source: 'line_messaging_api',
            messagingApiConfigured,
          });
          return;
        }
      } catch (err) {
        console.error('LINE profile lookup failed:', err);
      }
    }

    if (mid === 'U4c8819e7b22a4f09d11e7730') {
      res.json({
        mid,
        displayName: fallbackName || 'คุณสมศรี',
        source: 'policyholder_record',
        messagingApiConfigured,
      });
      return;
    }

    if (fallbackName) {
      res.json({
        mid,
        displayName: fallbackName,
        source: 'query_param',
        messagingApiConfigured,
      });
      return;
    }

    res.status(404).json({
      error: 'LINE profile not found',
      mid,
      messagingApiConfigured,
    });
  });

  const partnersDir = path.resolve(__dirname, 'public/partners');
  app.use(
    '/partners',
    express.static(partnersDir, {
      setHeaders: (res, filePath) => {
        if (filePath.endsWith('partners.json')) {
          res.setHeader('Cache-Control', 'no-store');
        }
      },
    })
  );
  app.use('/partners', (_req, res) => {
    res.status(404).send('Partner file not found');
  });

  // Serve scroll animation frames from D:\BG or public/bg-frames
  const bgFramesDir = path.resolve('D:/BG');
  app.use(
    '/bg-frames',
    express.static(bgFramesDir, {
      maxAge: '7d',
      immutable: true,
      fallthrough: true,
    })
  );

  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distDir = path.resolve(__dirname, 'dist');
    app.use(express.static(distDir));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distDir, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server listening on http://0.0.0.0:${PORT}`);
  });
}

void startServer();
