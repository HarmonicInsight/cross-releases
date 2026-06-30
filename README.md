# Insight Business Suite — Releases

> 🇯🇵 [日本語版 README](./README.ja.md)

Official release distribution for HARMONIC insight products.

## Download

Download installers from the [Releases page](https://github.com/HarmonicInsight/cross-releases/releases).

## Products

| Product | Platform | Description | Latest |
|---------|:--------:|-------------|:------:|
| Insight Camera (スッキリカメラ) | Android | A simple, beautiful camera app | v1.0.0 |
| Insight Training Studio (INMV) | Windows | Education video authoring tool (PPTX → narrated MP4 / SCORM) | v1.0.7 |
| Insight Performance Management (IOSH) | Windows | Excel-based management & AI analysis | v1.0.5 |
| Insight Deck Quality Gate (INSS) | Windows | PowerPoint content management & AI editing | v1.0.5 |
| Insight Doc Translator (INST) | Windows | AI-powered multilingual document translation | v1.0.4 |
| InsightPy (INPY) | Windows | Python learning & automation studio (bundled Python, RPA) | v1.0.1 |

## Installation

### Android
- Install from [Google Play Store](https://play.google.com/store/apps/details?id=com.harmonic.insight.camera)
- Or download the APK from the Releases page and sideload

### Windows
1. Download the latest installer (`.exe`) from the Releases page
2. Run the installer and follow the on-screen instructions

### If Windows SmartScreen blocks the installer

Our installers are currently distributed **unsigned** (code signing is on our roadmap).
When you run the installer for the first time, Windows may show a blue full-screen warning:

> **Windows protected your PC**
> Microsoft Defender SmartScreen prevented an unrecognized app from starting.
> Running this app might put your PC at risk.

This warning is shown for **all new or low-volume Windows installers** — it does not mean the
file is malicious. To install our app:

1. On the blue warning screen, click **More info** (small link below the message)
2. A **Run anyway** button will appear — click it to start the installer
3. The Windows UAC prompt (yes/no) will follow — click **Yes** to proceed

To verify the installer is genuine before running, check the SHA-256 hash against the values
published below (see *Verifying downloads*).

## Verifying downloads (SHA-256)

For enterprise users and security-conscious customers, verify the integrity of downloaded files
using SHA-256 hashes published with each release.

### Insight Training Studio v1.0.7

```
749B488E11D5070DD0C3D339544B0C43AA3803A6747FDFC153198493BEDEF899  InsightTrainingStudio_Setup_1.0.7.exe
BF671964DE39A5F04125310036F7971B8F1803CE6889B94F98E114E7AFEF7DA9  InsightTrainingStudio_Setup_1.0.7.zip
```

### Insight Doc Translator v1.0.4

```
EF1E4B950FE0BE4F5853E7C3BE3C7D5A5F0037A2401FD77E30D17CD7B9B5E09E  InsightDocTranslator_Setup_1.0.4.exe
DA313351AA1C8EDA98F78D1EEACFB82F5272F7DBA8D253ECE000EE975D0C7FB8  InsightDocTranslator_Setup_1.0.4.zip
```

### InsightPy v1.0.1

> EV code-signed (GlobalSign EV · HARMONIC insight LLC). As a brand-new publisher, SmartScreen may still show an "unrecognized app" prompt on the first downloads until reputation builds — click **More info** → **Run anyway** (the publisher shows as HARMONIC INSIGHT LLC).

```
326283857D4B325EBD7E33ABA2196D851F416EE3AF8C61097CB00B0DD3ADA0A1  InsightPy_Setup_1.0.1.exe
9FA1ED76FAFFE7171D46827050BE64E90C7F1807B4AD28F5037ABAB8D7968E58  InsightPy_Setup_1.0.1.zip
```

### How to verify (PowerShell)

```powershell
Get-FileHash -Algorithm SHA256 .\InsightTrainingStudio_Setup_1.0.7.exe
```

### How to verify (Linux/macOS)

```bash
sha256sum InsightTrainingStudio_Setup_1.0.7.exe
```

The output hash must match the value above.

## File associations

| Extension | Product | Description |
|-----------|---------|-------------|
| `.pptx`   | Insight Training Studio | Single-file project format (project metadata embedded as `customXml`) |
| `.iosh`   | Insight Performance Management | Project files |
| `.inss`   | Insight Deck Quality Gate | Project files |

## License

License information is available from the Windows program list and inside each application's
license screen. All products are usable on the FREE plan with basic functionality without
entering a license key after installation.

---

Copyright (C) 2026 HARMONIC insight
