import React, { useEffect, useState } from 'react';
import {
  AdvancedMarker,
  InfoWindow,
  Map as GoogleMap,
  Pin,
  useAdvancedMarkerRef,
  useApiLoadingStatus,
  useMap,
  useMapsLibrary,
  APILoadingStatus,
} from '@vis.gl/react-google-maps';
import { ExternalLink, MapPin } from 'lucide-react';

interface JaymartOfficeMapProps {
  apiKey: string;
  quotaExceeded: boolean;
  officeCompany: string;
  officeAddress: string;
  mapTitle: string;
  openDirectionsLabel: string;
  fallbackNote: string;
}

interface LatLngLiteral {
  lat: number;
  lng: number;
}

interface ResolvedPlaceInfo {
  location: LatLngLiteral;
  displayName: string;
  formattedAddress: string;
  googleMapsURI: string;
}

const BANGKOK_VIEWPORT_CENTER: LatLngLiteral = {
  lat: 13.765,
  lng: 100.643,
};

function OfficeMapInner({
  officeCompany,
  officeAddress,
  openDirectionsLabel,
}: {
  officeCompany: string;
  officeAddress: string;
  openDirectionsLabel: string;
}) {
  const map = useMap();
  const placesLib = useMapsLibrary('places');
  const [markerRef, marker] = useAdvancedMarkerRef();
  const [resolvedPlace, setResolvedPlace] = useState<ResolvedPlaceInfo | null>(null);
  const [infoOpen, setInfoOpen] = useState(true);

  useEffect(() => {
    if (!placesLib || !map) return;

    let cancelled = false;

    const findOffice = async () => {
      try {
        const { places } = await placesLib.Place.searchByText({
          textQuery: 'Jaymart Insurance 195/1 Ramkhamhaeng Bangkok',
          fields: ['displayName', 'location', 'formattedAddress', 'googleMapsURI'],
          maxResultCount: 1,
          region: 'th',
        });

        if (cancelled) return;

        const first = places?.[0];
        if (first?.location) {
          const lat =
            typeof first.location.lat === 'function'
              ? first.location.lat()
              : Number(first.location.lat);
          const lng =
            typeof first.location.lng === 'function'
              ? first.location.lng()
              : Number(first.location.lng);

          if (!Number.isNaN(lat) && !Number.isNaN(lng)) {
            const loc = { lat, lng };
            setResolvedPlace({
              location: loc,
              displayName: first.displayName || officeCompany,
              formattedAddress: first.formattedAddress || officeAddress,
              googleMapsURI:
                first.googleMapsURI ||
                `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                  'Jaymart Insurance 195/1 Ramkhamhaeng Bangkok 10240'
                )}`,
            });
            map.panTo(loc);
            map.setZoom(16);
          }
        }
      } catch (err) {
        const msg = err instanceof Error ? err.message : String(err);
        if (
          msg.includes('RESOURCE_EXHAUSTED') ||
          msg.includes('OVER_QUERY_LIMIT') ||
          msg.includes('QuotaExceeded') ||
          msg.includes('429')
        ) {
          window.dispatchEvent(new CustomEvent('gmp-quota-exceeded'));
        }
        console.error('Google Places lookup error:', err);
      }
    };

    void findOffice();

    return () => {
      cancelled = true;
    };
  }, [placesLib, map, officeCompany, officeAddress]);

  if (!resolvedPlace) {
    return null;
  }

  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        position={resolvedPlace.location}
        title={resolvedPlace.displayName}
        onClick={() => setInfoOpen((prev) => !prev)}
      >
        <Pin background="#D9232E" borderColor="#FFFFFF" glyphColor="#FFFFFF" scale={1.15} />
      </AdvancedMarker>

      {infoOpen && marker && (
        <InfoWindow
          anchor={marker}
          maxWidth={280}
          onCloseClick={() => setInfoOpen(false)}
        >
          <div className="p-1 text-black space-y-2">
            <div className="text-sm font-bold leading-snug">{resolvedPlace.displayName}</div>
            <p className="text-xs leading-relaxed text-neutral-700">
              {resolvedPlace.formattedAddress}
            </p>
            <a
              href={resolvedPlace.googleMapsURI}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#D9232E] hover:underline"
            >
              <span>{openDirectionsLabel}</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </InfoWindow>
      )}
    </>
  );
}

function LiveGoogleMapView({
  officeCompany,
  officeAddress,
  openDirectionsLabel,
  fallbackNote,
  mapsSearchUrl,
}: {
  officeCompany: string;
  officeAddress: string;
  openDirectionsLabel: string;
  fallbackNote: string;
  mapsSearchUrl: string;
}) {
  const status = useApiLoadingStatus();

  if (status === APILoadingStatus.FAILED || status === APILoadingStatus.AUTH_FAILURE) {
    return (
      <div className="h-[300px] sm:h-[360px] flex flex-col items-center justify-center p-6 text-center space-y-4 bg-black">
        <MapPin className="w-8 h-8 text-[#D9232E]" />
        <div className="space-y-1.5 max-w-md">
          <div className="text-base font-bold text-white">{officeCompany}</div>
          <p className="text-xs sm:text-sm text-white leading-relaxed">{officeAddress}</p>
          <p className="text-xs text-white/75">{fallbackNote}</p>
        </div>
        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[44px] px-6 py-2.5 rounded-full md:rounded-none bg-[#D9232E] text-white text-sm font-semibold hover:bg-[#b81b24] transition-colors inline-flex items-center gap-2"
        >
          <span>{openDirectionsLabel}</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    );
  }

  return (
    <div className="w-full h-[320px] sm:h-[380px] lg:h-[420px]">
      <GoogleMap
        mapId="DEMO_MAP_ID"
        defaultCenter={BANGKOK_VIEWPORT_CENTER}
        defaultZoom={12}
        gestureHandling="cooperative"
        disableDefaultUI={false}
        internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
        style={{ width: '100%', height: '100%' }}
      >
        <OfficeMapInner
          officeCompany={officeCompany}
          officeAddress={officeAddress}
          openDirectionsLabel={openDirectionsLabel}
        />
      </GoogleMap>
    </div>
  );
}

export function JaymartOfficeMap({
  apiKey,
  quotaExceeded,
  officeCompany,
  officeAddress,
  mapTitle,
  openDirectionsLabel,
  fallbackNote,
}: JaymartOfficeMapProps) {
  const mapsSearchUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'บริษัท เจมาร์ท ประกันภัย จำกัด (มหาชน) 195/1 อาคาร JMT Office รามคำแหง กรุงเทพมหานคร 10240'
  )}`;

  const showFallback = !apiKey || quotaExceeded;

  return (
    <div className="border border-white/25 bg-black overflow-hidden">
      <div className="px-4 sm:px-6 py-4 border-b border-white/15 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <MapPin className="w-4 h-4 text-[#D9232E] shrink-0" />
          <h4 className="text-sm sm:text-base font-bold text-white">{mapTitle}</h4>
        </div>

        <a
          href={mapsSearchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="min-h-[38px] px-3 py-1.5 md:px-0 md:py-0 rounded-full md:rounded-none border border-white/25 md:border-none inline-flex items-center gap-1.5 text-xs font-semibold text-white hover:text-[#D9232E] transition-colors whitespace-nowrap shrink-0"
        >
          <span>{openDirectionsLabel}</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {showFallback ? (
        <div className="h-[300px] sm:h-[360px] flex flex-col items-center justify-center p-6 text-center space-y-4 bg-black">
          <MapPin className="w-8 h-8 text-[#D9232E]" />
          <div className="space-y-1.5 max-w-md">
            <div className="text-base font-bold text-white">{officeCompany}</div>
            <p className="text-xs sm:text-sm text-white leading-relaxed">{officeAddress}</p>
            <p className="text-xs text-white/75">{fallbackNote}</p>
          </div>
          <a
            href={mapsSearchUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-[44px] px-6 py-2.5 rounded-full md:rounded-none bg-[#D9232E] text-white text-sm font-semibold hover:bg-[#b81b24] transition-colors inline-flex items-center gap-2"
          >
            <span>{openDirectionsLabel}</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      ) : (
        <LiveGoogleMapView
          officeCompany={officeCompany}
          officeAddress={officeAddress}
          openDirectionsLabel={openDirectionsLabel}
          fallbackNote={fallbackNote}
          mapsSearchUrl={mapsSearchUrl}
        />
      )}
    </div>
  );
}
