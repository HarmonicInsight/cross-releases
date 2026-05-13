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

## Installation

### Android
- Install from [Google Play Store](https://play.google.com/store/apps/details?id=com.harmonic.insight.camera)
- Or download the APK from the Releases page and sideload

### Windows
1. Download the latest installer (`.exe`) from the Releases page
2. Run the installer and follow the on-screen instructions

> **Note about Windows SmartScreen**
>
> The installer is currently distributed **unsigned**. Windows SmartScreen may show
> *"Windows protected your PC"*. To proceed, click **More info → Run anyway**.
> Code signing is on our roadmap for upcoming releases.

## Verifying downloads (SHA-256)

For enterprise users and security-conscious customers, verify the integrity of downloaded files
using SHA-256 hashes published with each release.

### Insight Training Studio v1.0.7

```
749B488E11D5070DD0C3D339544B0C43AA3803A6747FDFC153198493BEDEF899  InsightTrainingStudio_Setup_1.0.7.exe
BF671964DE39A5F04125310036F7971B8F1803CE6889B94F98E114E7AFEF7DA9  InsightTrainingStudio_Setup_1.0.7.zip
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
