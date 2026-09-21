import { ProductCategory } from "@/types";

export const productCategories: ProductCategory[] = [
  {
    slug: "cctv-surveillance",
    title: "CCTV Surveillance Systems",
    description:
      "HD and IP camera systems for complete property monitoring, recording, and remote viewing.",
    icon: "Camera",
    products: [
      {
        slug: "cp-plus-cp-urc-tc24pl3c-l-v2",
        sku: "CP-URC-TC24PL3C-L-V2",
        name: "CP PLUS 2.4MP Dual Light Bullet Camera Microphone full HD",
        brand: "CP PLUS",
        image: "/images/cppluscctv/CP-URC-TC24PL3C-L-V2.png",
        shortDescription:
          "2.4MP Dual Light bullet CCTV camera with 30M IR, 20M warm light, built-in mic, IP67 weatherproofing, and 4-in-1 HD output for 24/7 outdoor surveillance.",
        features: [
          "2.4MP PS CMOS image sensor with max 1920×1080 @25/30fps",
          "Smart Dual Light: 30M IR + 20M warm light for full-color night vision",
          "Active deterrence with real-time warm LED activation",
          "Built-in microphone for audio-video surveillance",
          "IP67 weatherproof rating for outdoor use",
          "4-in-1 HD: HDCVI, HDTVI, AHD, CVBS over a single coaxial cable",
          "DWDR, Day/Night (ICR), 2D DNR, BLC, HLC",
          "3.6mm fixed lens (2.8mm and 6mm optional)",
        ],
        specifications: [
          { label: "Image Sensor", value: "2.4MP PS CMOS Image Sensor" },
          { label: "Max. Resolution", value: "1920 (H) × 1080 (V)" },
          {
            label: "Minimum Illumination",
            value:
              "0.02 lux F2.0 (Color, 30 IRE), 0.002 lux F2.0 (B/W, 30 IRE), 0 lux (IR on)",
          },
          {
            label: "Angle Adjustment",
            value: "Pan: 0°–360° Tilt: 0°–90° Rotation: 0°–360°",
          },
          {
            label: "Shutter Speed",
            value:
              "PAL: 1/25 s–1/100,000 s, NTSC: 1/30 s–1/100,000 s",
          },
          { label: "White Balance", value: "Auto, Area white balance" },
          { label: "Lens Mount", value: "M12" },
          {
            label: "Close Focus Distance",
            value: "3.6 mm: 0.8 m, 2.8 mm: 0.5 m, 6 mm: 2.4 m",
          },
          { label: "Gain Control (AGC)", value: "Auto, Manual" },
          { label: "Max. Aperture", value: "F2.0" },
          {
            label: "DORI Distance",
            value:
              "Lens 3.6 mm: 55.0 m (Detect), 22.0 m (Observe), 11.0 m (Recognize), 5.5 m (Identify)\nLens 2.8 mm: 44.7 m (Detect), 17.9 m (Observe), 8.9 m (Recognize), 4.5 m (Identify)\nLens 6 mm: 102.9 m (Detect), 41.1 m (Observe), 20.6 m (Recognize), 10.3 m (Identify)",
          },
          {
            label: "Lens",
            value: "3.6 mm (2.8 mm and 6 mm Optional)",
          },
          { label: "Lens Type", value: "Fixed-Focal" },
          {
            label: "Angle of View",
            value:
              "3.6 mm: H: 80°, V: 43°, D: 94°\n2.8 mm: H: 100°, V: 54°, D: 117°\n6 mm: H: 43°, V: 24°, D: 50°",
          },
          { label: "S/N Ratio", value: ">65 dB" },
          { label: "Back Light Compensation", value: "BLC / HLC / DWDR" },
          {
            label: "Video Output",
            value:
              "Video output choices of CVI/TVI/AHD/CVBS by one BNC port",
          },
          {
            label: "Resolution",
            value: "1080p (1920 × 1080), 960H (960 × 576/960 × 480)",
          },
          {
            label: "Frame Rate",
            value:
              "CVI: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nAHD: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nTVI: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nCVBS: PAL: 960H, NTSC: 960H",
          },
          { label: "Noise Reduction", value: "2D DNR" },
          { label: "Privacy Mask", value: "Off/On (8 areas, rectangle)" },
          { label: "Day/Night", value: "Auto(ICR)/Color/B/W" },
          { label: "Iris Control", value: "Fixed" },
          { label: "IR Range", value: "30 Mtr." },
          { label: "Warm Light Range", value: "20 Mtr." },
          { label: "IR Mode", value: "Smart IR" },
          { label: "Audio", value: "Built-in Mic" },
          { label: "Weatherproof Standard", value: "IP67" },
        ],
      },
      {
        slug: "cp-plus-cp-urc-tc51pl3c",
        sku: "CP-URC-TC51PL3C",
        name: "CP PLUS 5MP IR Bullet Camera 2k",
        brand: "CP PLUS",
        image: "/images/cppluscctv/CP-URC-TC51PL3C.png",
        shortDescription:
          "5MP HD bullet CCTV camera with 30M Smart IR night vision, built-in microphone, IP67 rating, and 4-in-1 HD-CVI/TVI/AHD/CVBS output for professional outdoor security.",
        features: [
          "5MP CMOS image sensor with 2880×1620 resolution",
          "30M Smart IR range for clear night vision",
          "Built-in microphone for audio recording",
          "IP67 weatherproof rating for outdoor use",
          "DWDR, Day/Night (ICR), 2D DNR, BLC",
          "3.6mm fixed lens with 74° horizontal view",
          "4-in-1 HD: HDCVI, HDTVI, AHD output over single BNC",
          "UNI+ technology for universal DVR compatibility",
        ],
        specifications: [
          {
            label: "Image Sensor",
            value:
              '1/3" 5MP CMOS Image Sensor (0.84667 centimeters)',
          },
          { label: "Effective Pixels", value: "2880 (H) × 1620 (V)" },
          {
            label: "Minimum Illumination",
            value:
              "0.02 lux@F2.0 (Color, 30 IRE), 0.002 lux@F2.0 (B/W, 30 IRE), 0 lux (IR on)",
          },
          {
            label: "Angle Adjustment",
            value: "Pan: 0°–360°, Tilt: 0°–90°, Rotation: 0°–360°",
          },
          {
            label: "Shutter Speed",
            value:
              "PAL: 1/25 s–1/100000 s, NTSC: 1/30 s–1/100000 s",
          },
          { label: "White Balance", value: "Auto, Manual" },
          { label: "Lens", value: "3.6mm Fixed Lens" },
          { label: "Gain Control (AGC)", value: "Auto" },
          { label: "Lens Type", value: "Fixed-focal" },
          { label: "Max. Aperture", value: "F2.0" },
          { label: "Lens Mount", value: "M12" },
          {
            label: "DORI Distance",
            value:
              "Lens 3.6mm: 79.4m (Detect), 31.8m (Observe), 15.9m (Recognize), 7.9m (Identify)",
          },
          { label: "Close Focus Distance", value: "1.4 m" },
          { label: "S/N Ratio", value: ">65 dB" },
          { label: "Back Light Compensation", value: "BLC/DWDR" },
          { label: "Angle of View", value: "3.6mm - H: 74°, V: 41°, D: 89°" },
          {
            label: "Resolution",
            value:
              "5M (2880 × 1620), 4M (2560 × 1440), 1080p (1920 × 1080), 960H (960 × 576/960 × 480)",
          },
          {
            label: "Video Output",
            value: "Video output choices of CVI/TVI/AHD by one BNC",
          },
          {
            label: "Frame Rate",
            value:
              "CVI: PAL: 5M@25 fps, 5M@12.5 fps, 4M@25 fps, 1080P@25 fps\nNTSC: 5M@25 fps, 5M@10 fps, 4M@30 fps, 1080P@30 fps\nAHD: PAL: 4M@25 fps, NTSC: 4M@30 fps\nTVI: PAL: 4M@25 fps, NTSC: 4M@30 fps",
          },
          { label: "Noise Reduction", value: "2D DNR" },
          { label: "Audio Input", value: "1 channel" },
          { label: "Day/Night", value: "Auto(ICR)/Color/B/W" },
          { label: "Iris Control", value: "Fixed" },
          { label: "Anti-corrosion Level", value: "Basic Protection" },
          { label: "IR Mode", value: "Smart IR" },
          { label: "IR Control", value: "Auto, Manual" },
          { label: "Audio", value: "Built-in Mic" },
          { label: "IR", value: "IR Range of 30 Mtr., IR Number 3 IR" },
          {
            label: "Operating Temperature",
            value: "-40 °C to +60 °C (-40 °F to +140 °F)",
          },
          {
            label: "Operating Humidity",
            value: "<95% (RH), non-condensing",
          },
          {
            label: "Storage Temperature",
            value: "-40 °C to +60 °C (-40 °F to +140 °F)",
          },
          {
            label: "Storage Humidity",
            value: "<95% (RH), non-condensing",
          },
          { label: "Power Source", value: "12 VDC ± 30%" },
          {
            label: "Power Consumption",
            value: "Max 3.3W (12 VDC, IR on)",
          },
          { label: "Weatherproof Standard", value: "IP67" },
          { label: "Casing", value: "Plastic" },
          {
            label: "Dimension",
            value: "146.1mm × 70.0mm × 69.8mm",
          },
          { label: "Weight", value: "0.17kg." },
        ],
      },
      {
        slug: "cp-plus-cp-urc-tc24pl3",
        sku: "CP-URC-TC24PL3",
        name: "CP PLUS 2.4MP IR Bullet Camera + Microphone fullHD",
        brand: "CP PLUS",
        image: "/images/cppluscctv/CP-URC-TC24PL3.png",
        shortDescription:
          "2.4MP HD bullet CCTV camera with 30M Smart IR, IP67 weatherproof housing, and switchable CVI/TVI/AHD/CVBS output for reliable outdoor monitoring.",
        features: [
          "2.4MP PS CMOS image sensor with 1920×1080 @25/30fps",
          "30M Smart IR range for night surveillance",
          "IP67 weatherproof rating for outdoor use",
          "DWDR, Day/Night (ICR), 2D DNR, AWB, AGC, BLC",
          "3.6mm fixed lens (2.8mm and 6mm optional)",
          "CVI/CVBS/AHD/TVI switchable output",
          "OSD menu control over coaxial cable",
        ],
        specifications: [
          { label: "Image Sensor", value: "2.4MP PS CMOS Image Sensor" },
          { label: "Max. Resolution", value: "1920 (H) × 1080 (V)" },
          {
            label: "Minimum Illumination",
            value:
              "0.02 lux@F2.0 (Color, 30 IRE), 0.002 lux@F2.0 (B/W, 30 IRE), 0 lux (IR on)",
          },
          {
            label: "Shutter Speed",
            value:
              "PAL: 1/25 s–1/100,000 s, NTSC: 1/30 s–1/100,000 s",
          },
          { label: "Lens", value: "3.6mm (2.8mm and 6mm optional)" },
          {
            label: "Angle Adjustment",
            value: "Pan: 0°–360°, Tilt: 0°–90°, Rotation: 0°–360°",
          },
          { label: "S/N Ratio", value: ">65 dB" },
          { label: "Lens Type", value: "Fixed-focal" },
          { label: "Lens Mount", value: "M12" },
          { label: "Max. Aperture", value: "F2.0" },
          {
            label: "Angle of View",
            value:
              "3.6 mm: H: 80°, V: 43°, D: 94°\n2.8 mm: H: 100°, V: 54°, D: 117°\n6 mm: H: 43°, V: 24°, D: 50°",
          },
          {
            label: "Close Focus Distance",
            value: "3.6 mm: 0.8 m; 2.8 mm: 0.5 m; 6 mm: 2.4 m",
          },
          {
            label: "DORI Distance",
            value:
              "3.6mm – 55.0m (Detect), 22.0m (Observe), 11.0m (Recognize), 5.5m (Identify)\n2.8mm – 44.7m (Detect), 17.9m (Observe), 8.9m (Recognize), 4.5m (Identify)\n6mm – 102.9m (Detect), 41.1m (Observe), 20.6m (Recognize), 10.3m (Identify)",
          },
          { label: "Back Light Compensation", value: "BLC/DWDR" },
          { label: "IR Number", value: "2 (IR light)" },
          { label: "Iris Control", value: "Fixed" },
          { label: "White Balance", value: "Auto" },
          {
            label: "Video Output",
            value:
              "Video output choices of CVI/TVI/AHD/CVBS by one BNC port",
          },
          { label: "Noise Reduction", value: "2D DNR" },
          { label: "Gain Control (AGC)", value: "Auto" },
          { label: "Day/Night", value: "Auto(ICR)/Color/B/W" },
          {
            label: "Resolution",
            value: "1080p (1920 × 1080), 960H (960 × 576/960 × 480)",
          },
          {
            label: "Frame Rate",
            value:
              "CVI: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nAHD: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nTVI: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nCVBS: PAL: 960H, NTSC: 960H",
          },
          { label: "IR Mode", value: "Smart IR" },
          { label: "IR", value: "IR Range of 30 Mtr." },
          { label: "IR Control", value: "Auto/Manual" },
          { label: "Weatherproof Standard", value: "IP67" },
          { label: "Casing", value: "Plastic" },
          {
            label: "Operating Temperature",
            value: "-40℃ ~ +60℃ (-40℃ ~ +140℃)",
          },
          {
            label: "Operating Humidity",
            value: "<95% (RH), non-condensing",
          },
          {
            label: "Storage Temperature",
            value: "-40℃ to +60℃ (-40℃ to +140℃)",
          },
          {
            label: "Storage Humidity",
            value: "<95% (RH), non-condensing",
          },
          { label: "Power Source", value: "12V DC ±30%" },
          {
            label: "Power Consumption",
            value: "Max. 2.8 W (12 VDC, IR on)",
          },
          {
            label: "Dimension",
            value: "146.1 mm × 70.0 mm × 69.8 mm",
          },
          { label: "Weight", value: "0.15 Kg." },
        ],
      },
      {
        slug: "cp-plus-cp-urc-dc51pl3c",
        sku: "CP-URC-DC51PL3C",
        name: "CP PLUS 5MP IR Dome Camera + Microphone 2k",
        brand: "CP PLUS",
        image: "/images/cppluscctv/CP-URC-DC51PL3C.png",
        shortDescription:
          "5MP HD dome CCTV camera with 30M Smart IR night vision, built-in microphone, and 4-in-1 HD output — ideal for indoor and outdoor surveillance.",
        features: [
          "5MP CMOS image sensor with 2880×1620 resolution",
          "30M Smart IR range with 2 IR LEDs",
          "Built-in microphone for audio recording",
          "DWDR, Day/Night (ICR), 2D DNR, BLC",
          "3.6mm fixed lens with 74° horizontal view",
          "4-in-1 HD: HDCVI, HDTVI, AHD, CVBS output",
          "Vandal-resistant dome design for indoor/outdoor use",
        ],
        specifications: [
          {
            label: "Image Sensor",
            value:
              '1/3" 5MP CMOS Image Sensor (0.84667 centimeters)',
          },
          {
            label: "Minimum Illumination",
            value:
              "0.02 lux@F2.0 (Color, 30 IRE), 0.002 lux@F2.0 (B/W, 30 IRE), 0 lux (IR on)",
          },
          { label: "Effective Pixels", value: "2880 (H) × 1620 (V)" },
          {
            label: "Angle Adjustment",
            value: "Pan: 0°–360°, Tilt: 0°–78°, Rotation: 0°–360°",
          },
          {
            label: "Shutter Speed",
            value:
              "PAL: 1/25 s–1/100,000 s, NTSC: 1/30 s–1/100,000 s",
          },
          { label: "White Balance", value: "Auto, Manual" },
          { label: "Lens Type", value: "Fixed-focal" },
          { label: "Max. Aperture", value: "F2.0" },
          { label: "Lens Mount", value: "M12" },
          { label: "Close Focus Distance", value: "1.4 m" },
          {
            label: "DORI Distance",
            value:
              "Lens 3.6mm: 79.4 m (Detect), 31.8 m (Observe), 15.9 m (Recognize), 7.9 m (Identify)",
          },
          { label: "Gain Control (AGC)", value: "Auto" },
          { label: "Lens", value: "3.6mm Fixed Lens" },
          { label: "Angle of View", value: "H: 74°, V: 41°, D: 89°" },
          { label: "S/N Ratio", value: ">65 dB" },
          { label: "Back Light Compensation", value: "BLC, DWDR" },
          {
            label: "Video Output",
            value:
              "Video output choices of CVI/TVI/AHD/CVBS by one BNC port",
          },
          {
            label: "Resolution",
            value:
              "5M (2880 × 1620), 4M (2560 × 1440), 1080p (1920 × 1080)",
          },
          {
            label: "Frame Rate",
            value:
              "CVI: PAL: 5M@25 fps, 5M@12.5 fps, 4M@25 fps, 1080p@25 fps\nNTSC: 5M@25 fps, 5M@10 fps, 4M@30 fps, 1080p@30 fps\nAHD: PAL: 4M@25 fps, NTSC: 4M@30 fps\nTVI: PAL: 4M@25 fps, NTSC: 4M@30 fps",
          },
          { label: "Noise Reduction", value: "2D DNR" },
          { label: "Day/Night", value: "Auto(ICR)/Color/B/W" },
          { label: "IR Control", value: "Auto, Manual" },
          { label: "Audio", value: "Built-in Mic" },
          { label: "IR", value: "IR Range of 30 Mtr." },
          { label: "IR Mode", value: "Smart IR" },
          { label: "Iris Control", value: "Fixed" },
          { label: "IR Number", value: "2 IR" },
          { label: "Power Source", value: "12 VDC ± 30%" },
          {
            label: "Power Consumption",
            value: "Max 2.2 W (12 VDC, IR on)",
          },
          { label: "Anti-corrosion Level", value: "Basic Protection" },
          {
            label: "Operating Temperature",
            value: "-40°C to +55°C (-40°F to +131°F)",
          },
          {
            label: "Operating Humidity",
            value: "<95% (RH), non-condensing",
          },
          {
            label: "Storage Temperature",
            value: "-40 °C to +55 °C (-40 °F to +131 °F)",
          },
          {
            label: "Storage Humidity",
            value: "<95% (RH), non-condensing",
          },
          { label: "Casing", value: "Plastic" },
          { label: "Dimension", value: "85.0mm × 77.1mm" },
          { label: "Weight", value: "0.11 kg" },
        ],
      },
      {
        slug: "cp-plus-cp-urc-dc24pl3c-l-v2",
        sku: "CP-URC-DC24PL3C-L-V2",
        name: "CP PLUS 2.4MP Dual Light Dome Camera + Microphone",
        brand: "CP PLUS",
        image: "/images/cppluscctv/CP-URC-DC24PL3C-L-V2.png",
        shortDescription:
          "2.4MP Dual Light dome CCTV camera with 30M IR + 20M warm light, active deterrence, built-in mic, and 4-in-1 HD output for full-color night surveillance.",
        features: [
          "2.4MP PS CMOS image sensor with max 1920×1080 @25/30fps",
          "Smart Dual Light: 30M IR + 20M warm light",
          "Active deterrence with real-time warm LED activation",
          "Built-in microphone for audio-video surveillance",
          "DWDR, Day/Night (ICR), 2D DNR, BLC, HLC",
          "3.6mm fixed lens (2.8mm optional)",
          "4-in-1 HD: HDCVI, HDTVI, AHD, CVBS output",
          "Vandal-resistant dome design for indoor/outdoor use",
        ],
        specifications: [
          { label: "Image Sensor", value: "2.4MP PS CMOS Image Sensor" },
          {
            label: "Minimum Illumination",
            value:
              "0.02 lux@F2.0 (Color, 30 IRE), 0.002 lux@F2.0 (B/W, 30 IRE), 0 lux (IR on)",
          },
          { label: "Max. Resolution", value: "1920 (H) × 1080 (V)" },
          {
            label: "Angle Adjustment",
            value: "Pan: 0°–360°, Tilt: 0°–78°, Rotation: 0°–360°",
          },
          {
            label: "Shutter Speed",
            value:
              "PAL: 1/25 s–1/100,000 s, NTSC: 1/30 s–1/100,000 s",
          },
          { label: "White Balance", value: "Auto, Area white Balance" },
          { label: "Lens Type", value: "Fixed-focal" },
          { label: "Lens", value: "3.6mm (2.8mm optional)" },
          {
            label: "DORI Distance",
            value:
              "Lens 3.6 mm: Detect-55.0 m, Observe-22.0 m, Recognize-11.0 m, Identify-5.5 m\nLens 2.8 mm: Detect-44.7 m, Observe-17.9 m, Recognize-8.9 m, Identify-4.5 m",
          },
          { label: "Max. Aperture", value: "F2.0" },
          { label: "Lens Mount", value: "M12" },
          {
            label: "Close Focus Distance",
            value: "3.6 mm: 0.8 m, 2.8 mm: 0.5 m",
          },
          { label: "Gain Control (AGC)", value: "Auto/Manual" },
          { label: "S/N Ratio", value: ">65 dB" },
          {
            label: "Angle of View",
            value:
              "3.6 mm: H: 80°, V: 43°, D: 94°\n2.8 mm: H: 100°, V: 54°, D: 117°",
          },
          { label: "Back Light Compensation", value: "BLC/HLC/DWDR" },
          {
            label: "Video Output",
            value:
              "Video output choices of CVI/TVI/AHD/CVBS by one BNC port",
          },
          {
            label: "Resolution",
            value: "1080p (1920 × 1080), 960H (960 × 576/960 × 480)",
          },
          {
            label: "Frame Rate",
            value:
              "CVI: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nAHD: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nTVI: PAL: 1080p@25 fps, NTSC: 1080p@30 fps\nCVBS: PAL: 960H, NTSC: 960H",
          },
          { label: "Noise Reduction", value: "2D DNR" },
          { label: "Privacy Mask", value: "Off/On (8 areas, rectangle)" },
          { label: "Day/Night", value: "Auto(ICR)/Color/B/W" },
          { label: "IR Number", value: "2 Warm Light, 2 IR Light" },
          { label: "IR", value: "IR Range of 30 Mtr." },
          { label: "Warm Light", value: "Warm Light Range of 20 Mtr." },
          { label: "IR Control", value: "Auto, Manual" },
          { label: "Mirror Function", value: "Support" },
          { label: "Iris Control", value: "Fixed" },
          { label: "Audio", value: "Built-in Mic" },
          { label: "IR Mode", value: "Smart IR&WL, WL Mode, IR Mode" },
          {
            label: "Operating Temperature",
            value: "-40 °C to +60 °C (-40 °F to +140 °F)",
          },
          {
            label: "Operating Humidity",
            value: "<95% (RH), non-condensing",
          },
          {
            label: "Storage Temperature",
            value: "-40 °C to +60 °C (-40 °F to +140 °F)",
          },
          {
            label: "Storage Humidity",
            value: "<95% (RH), non-condensing",
          },
          { label: "Power Source", value: "12 VDC ± 30%" },
          {
            label: "Power Consumption",
            value: "Max 2.1 W (12 VDC, LED on)",
          },
          { label: "Dimension", value: "85.0 mm × 77.1 mm" },
          { label: "Casing", value: "Plastic" },
          { label: "Weight", value: "0.11kg." },
        ],
      },
    ],
  },
  {
    slug: "biometric-access",
    title: "Biometric & Access Control",
    description:
      "Advanced access control and time attendance systems using biometric technology.",
    icon: "Fingerprint",
    products: [
      {
        slug: "biometric-door-locks",
        sku: "biometric-door-locks",
        name: "Biometric Door Locks",
        brand: "",
        shortDescription:
          "Smart locks using fingerprint or face recognition",
        features: [
          "Fingerprint + password + card backup",
          "Stainless steel construction",
          "Low battery warning",
          "Audit trail logging",
          "IP54 weather resistant",
        ],
      },
      {
        slug: "face-recognition",
        sku: "face-recognition",
        name: "Fingerprint & Face Recognition Terminals",
        brand: "",
        shortDescription: "Multi-modal biometric access terminals",
        features: [
          "Fingerprint + facial recognition",
          "3.5-inch display screen",
          "Network connectivity",
          "USB data backup",
          "Support for 5,000+ users",
        ],
      },
      {
        slug: "rfid-card-access",
        sku: "rfid-card-access",
        name: "RFID/Card Access Systems",
        brand: "",
        shortDescription: "Card-based access control for multiple users",
        features: [
          "13.56 MHz RFID technology",
          "Compatible with standard ID cards",
          "Real-time access logging",
          "Multi-door support",
          "Low maintenance operation",
        ],
      },
      {
        slug: "time-attendance",
        sku: "time-attendance",
        name: "Time Attendance Machines",
        brand: "",
        shortDescription: "Automated employee time tracking systems",
        features: [
          "Fingerprint or face recognition",
          "Real-time data sync",
          "Attendance reports and analytics",
          "Network integration",
          "Cloud backup support",
        ],
      },
      {
        slug: "em-locks",
        sku: "em-locks",
        name: "Electromagnetic Locks & Exit Buttons",
        brand: "",
        shortDescription:
          "Electric locking systems for secure access control",
        features: [
          "600 lbs holding force",
          "12/24VDC operation",
          "Emergency release button",
          "Weatherproof design",
          "Universal door compatibility",
        ],
      },
    ],
  },
  {
    slug: "video-door-phones",
    title: "Video Door Phones",
    description:
      "Video intercom systems for safe visitor identification and communication.",
    icon: "Video",
    products: [
      {
        slug: "wired-video-door-phone",
        sku: "wired-video-door-phone",
        name: "Wired Video Door Phones",
        brand: "",
        shortDescription: "Fixed installation video intercoms",
        features: [
          "7-inch LCD display",
          "HD camera lens",
          "Night vision capability",
          "Two-way audio communication",
          "Electric lock integration",
        ],
      },
      {
        slug: "wireless-video-door-phone",
        sku: "wireless-video-door-phone",
        name: "Wireless Video Door Phones",
        brand: "",
        shortDescription: "Cordless video intercom systems",
        features: [
          "2.4 GHz wireless transmission",
          "Battery powered",
          "3-inch portable monitor",
          "Motion detection alert",
          "Easy plug-and-play setup",
        ],
      },
      {
        slug: "multi-apartment-video",
        sku: "multi-apartment-video",
        name: "Multi-Apartment Video Door Phone Systems",
        brand: "",
        shortDescription: "Centralized systems for apartment complexes",
        features: [
          "Up to 100+ apartments support",
          "IP-based architecture",
          "Mobile app access",
          "Video recording capability",
          "Master control panel",
        ],
      },
    ],
  },
  {
    slug: "alarm-intruder",
    title: "Alarm & Intruder Detection",
    description:
      "Burglar alarms and motion detection systems for comprehensive security.",
    icon: "AlertTriangle",
    products: [
      {
        slug: "alarm-panels",
        sku: "alarm-panels",
        name: "Burglar Alarm Panels",
        brand: "",
        shortDescription: "Main control units for alarm systems",
        features: [
          "8 to 32 zone capacity",
          "Wireless and wired support",
          "Multiple siren outputs",
          "Backup battery included",
          "GSM/3G alert transmission",
        ],
      },
      {
        slug: "pir-sensors",
        sku: "pir-sensors",
        name: "Motion/PIR Sensors",
        brand: "",
        shortDescription:
          "Passive infrared sensors for motion detection",
        features: [
          "12-meter detection range",
          "Pet-immune options available",
          "Adjustable sensitivity",
          "Wireless transmission",
          "Low battery indication",
        ],
      },
      {
        slug: "door-window-sensors",
        sku: "door-window-sensors",
        name: "Door & Window Sensors",
        brand: "",
        shortDescription:
          "Magnetic contact switches for entry protection",
        features: [
          "Wireless and wired models",
          "Surface or recessed mount",
          "Extended range options",
          "Weatherproof design",
          "Quick installation",
        ],
      },
      {
        slug: "sirens-hooters",
        sku: "sirens-hooters",
        name: "Sirens & Hooters",
        brand: "",
        shortDescription: "Audible alarm devices for deterrence",
        features: [
          "115dB siren output",
          "Flashing strobe lights",
          "Multiple tone options",
          "12/24VDC operation",
          "Weather-resistant housing",
        ],
      },
      {
        slug: "smart-home-security",
        sku: "smart-home-security",
        name: "Smart Home Security Kits",
        brand: "",
        shortDescription: "Complete DIY security systems for homes",
        features: [
          "WiFi-connected hub",
          "Wireless sensors included",
          "Mobile app alerts",
          "Cloud storage for videos",
          "Voice control compatible",
        ],
      },
    ],
  },
  {
    slug: "intercom-epabx",
    title: "Intercom & EPABX",
    description:
      "Communication systems for offices, apartments, and industrial facilities.",
    icon: "Headphones",
    products: [
      {
        slug: "epabx-systems",
        sku: "epabx-systems",
        name: "EPABX Systems",
        brand: "",
        shortDescription:
          "Private branch exchange for office communications",
        features: [
          "4 to 128 extensions",
          "Caller ID display",
          "Call recording support",
          "Interactive voice response (IVR)",
          "Email/SMS notifications",
        ],
      },
      {
        slug: "intercom-handsets",
        sku: "intercom-handsets",
        name: "Intercom Handsets & Accessories",
        brand: "",
        shortDescription:
          "Communication devices for internal systems",
        features: [
          "Wall-mounted or desk models",
          "Push-button or digital keypads",
          "Volume control",
          "Weatherproof options",
          "Long cable runs supported",
        ],
      },
      {
        slug: "apartment-intercom",
        sku: "apartment-intercom",
        name: "Apartment Intercom Systems",
        brand: "",
        shortDescription:
          "Intercoms designed for apartment complexes",
        features: [
          "Master and sub-unit design",
          "Electric door lock control",
          "Visitor identification",
          "Multi-dwelling support",
          "Easy installation",
        ],
      },
    ],
  },
  {
    slug: "fire-safety",
    title: "Fire Safety",
    description:
      "Smoke detection and fire alarm systems for rapid emergency response.",
    icon: "Flame",
    products: [
      {
        slug: "smoke-detectors",
        sku: "smoke-detectors",
        name: "Smoke Detectors",
        brand: "",
        shortDescription:
          "Early warning devices for fire detection",
        features: [
          "Photoelectric technology",
          "Ultra-low false alarm rate",
          "Battery backup included",
          "Interconnectable models",
          "ISI certified",
        ],
      },
      {
        slug: "fire-alarm-panels",
        sku: "fire-alarm-panels",
        name: "Fire Alarm Panels",
        brand: "",
        shortDescription:
          "Central fire monitoring and control systems",
        features: [
          "Multi-detector support",
          "Audible and visual alarms",
          "Alert relay to fire department",
          "Battery backup",
          "Easy integration with security systems",
        ],
      },
      {
        slug: "fire-extinguishers",
        sku: "fire-extinguishers",
        name: "Fire Extinguishers",
        brand: "",
        shortDescription:
          "Portable fire suppression equipment",
        features: [
          "ABC, CO2, and specialty types",
          "1kg to 50kg sizes",
          "Annual service certification",
          "Bracket mounting systems",
          "Easy identification markers",
        ],
      },
    ],
  },
  {
    slug: "cabling-networking",
    title: "Cabling & Networking",
    description:
      "Infrastructure solutions for data and power distribution.",
    icon: "Wifi",
    products: [
      {
        slug: "structured-cabling",
        sku: "structured-cabling",
        name: "Structured Cabling Solutions",
        brand: "",
        shortDescription: "Professional network infrastructure",
        features: [
          "Cat6A and Cat7 certifications",
          "Patch panels and cable management",
          "Organized labeling systems",
          "Future-proof design",
          "Compliant with industry standards",
        ],
      },
      {
        slug: "lan-network",
        sku: "lan-network",
        name: "LAN/Network Setup & Installation",
        brand: "",
        shortDescription:
          "Complete network installation services",
        features: [
          "On-site survey and planning",
          "Professional cabling installation",
          "Router and switch configuration",
          "Speed testing and optimization",
          "Documentation and training",
        ],
      },
      {
        slug: "electrical-wiring",
        sku: "electrical-wiring",
        name: "Electrical Wiring & Distribution",
        brand: "",
        shortDescription:
          "Power supply and distribution systems",
        features: [
          "Heavy-duty cables and conduits",
          "Distribution boards",
          "Circuit protection systems",
          "Load balancing",
          "Emergency backup power integration",
        ],
      },
    ],
  },
];
