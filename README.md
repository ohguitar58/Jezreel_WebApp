# Jezreel_WebApp

Interactive web map: 이스르엘 골짜기와 기손강 | Jezreel Valley & Kishon River

Built from the user's local QGIS 3.44 project via qgis2web (OpenLayers), export of 2026-11-13.
Charted Territory (Esri vector basemap) added as a layer in `layers/layers.js` on 2026-11-14,
same patch as hosea-map: the public Esri-owned style item is loaded live and anonymously
(no API key), with Esri attribution set on the source.

Layers: Jezreel Valley lowland candidate (dashed green draft, DEM algorithm output - review
in QGIS before cartographic claims), Kishon River (OSM relation 9214713), 6 StoryMap sites,
4 peaks, 3 region labels. Bilingual Korean + English.

Serve over HTTP for local testing (not file://): `python3 -m http.server 8000 --bind 127.0.0.1`

Data provenance: qgis data package v4.1 (2026-11-13), Copernicus DEM GLO-30,
OpenStreetMap contributors (ODbL). Basemap: Powered by Esri (c) Esri and its data providers.
