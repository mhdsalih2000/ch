const products = [
    {
        "name": "MBD-X12SAE-5",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x12sae-5.png.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x12sae-5.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "10th/11th Gen Intel\u00ae Core\u2122 i9/i7/i5/i3 Processors, Intel\u00ae Xeon\u00ae W-1200/W-1300 Processors Single Socket LGA-1200 (Socket H5), Up to 125W TDP",
        "Memory": "128GB Unbuffered ECC/non-ECC UDIMM, DDR4-3200MHz, in 4 DIMM slots",
        "Expansion Slots": "2 PCIe 4.0 x16 (16/NA or 8/8), 2 PCIe 3.0 x1 1 PCI 5V 32bit M.2 Interface: 1 PCIe 4.0 x4 and 2 PCIe 3.0 x4 (RAID 0, 1) M.2 Form Factor: 2280/22110 M.2 Key: M-Key"
    },
    {
        "name": "MBD-H11SSW-IN",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/h/1/h11ssw-in_spec.jpg_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/h11ssw-in.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary",
        "Processor": "Single AMD EPYC\u2122 7001/7002* series Processor (*Board revision 2.x required) Socket SP3",
        "Memory": "2TB Registered ECC DDR4 2666MHz SDRAM in 16 DIMMs 4TB Registered ECC DDR4 3200MHz SDRAM in 16 DIMMs (Board revision 2.x required)",
        "Expansion Slots": "1 PCI-E 3.0 x32 Left Riser Slot 1 PCI-E 3.0 x16 Right Riser Slot M.2 Interface: 2 PCI-E 3.0 x2 M.2 Form Factor: 2280, 22110 M.2 Key: M-key"
    },
    {
        "name": "X10SDV-TLN4F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x10sdv-tln4f_connectors.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x10sdv-tln4f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Mini-ITX",
        "Processor": "Intel\u00ae Xeon\u00ae processor D-1541, Single socket FCBGA 1667, 8-Core, 45W",
        "Memory": "Up to 128GB ECC RDIMM DDR4 2400MHz or 64GB ECC/non-ECC UDIMM in 4 sockets",
        "Expansion Slots": "1 PCI-E 3.0 x16, M.2 PCI-E 3.0 x4 (SATA support), M Key 2242/2280"
    },
    {
        "name": "X11DPI-N",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dpi-nt_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dpi-n.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz Or 2TB Intel\u00a9 PMem, DDR4-2666MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "4 PCIe 3.0 x16, 2 PCIe 3.0 x8, 2 PCIe 3.0 NVMe x4 Internal Port(s) M.2 Interface: PCIe 3.0 x4 M.2 Form Factor: 2260, 2280, 22110 M.2 Key: M-Key"
    },
    {
        "name": "X11DPL-I",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dpi-nt_top_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dpl-i.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 140W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 2TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 2TB 3DS ECC LRDIMM, DDR4-2933MHz, in 8 DIMM slots",
        "Expansion Slots": "2 PCIe 3.0 x16, 3 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8 slot) M.2 Interface: 1 SATA/PCIe 3.0 x4 M.2 Form Factor: 2260, 2280 M.2 Key: M-Key"
    },
    {
        "name": "X11SSW-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ssw-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ssw-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary",
        "Processor": "Single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v6/v5, Intel\u00ae 7th/6th Gen. Core\u2122 i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x4 (in x16, Right Riser slot), 1 PCIe 3.0 x16 (Left Riser slot), M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 22110, 2260, 2280, Key: M-Key"
    },
    {
        "name": "X11SSL-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ssl-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ssl-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Micro-ATX",
        "Processor": "single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v6/v5, Intel\u00ae 7th/6th Gen. Core\u2122 i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16), 1 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8)"
    },
    {
        "name": "X11SSH-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ssh-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ssh-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Micro-ATX",
        "Processor": "Single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v6/v5, Intel\u00ae 7th/6th Gen. Core\u2122 i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16), 1 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8), M.2 Interface: PCIe 3.0 x2, Form Factor: 2280, Key: M-Key"
    },
    {
        "name": "X11SPL-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spl-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spl-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Single Socket LGA-3647 (Socket P) supported, CPU TDP supports Up to 165W TDP",
        "Memory": "Up to 2TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 2TB 3DS ECC LRDIMM, DDR4-2933MHz, in 8 DIMM slots; Up to 1TB Intel Optane DC Persistent Memory in memory mode (Cascade Lake Only)",
        "Expansion Slots": "2 PCIe 3.0 x8 (in x16 slot), 4 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8 slot), M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 2280, 22110, Key: M-Key"
    },
    {
        "name": "X11SPI-TF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spi-tf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spi-tf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP",
        "Memory": "Up to 2TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 2TB 3DS ECC LRDIMM, DDR4-2933MHz, in 8 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x16, 1 PCIe 3.0 x16 (x16 or x8 ), 1 PCIe 3.0 x8 (x0 or x8 ), 1 PCIe 3.0 x8, 1 PCIe 3.0 x4 (in x8 slot), M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 2280, 22110, Key: M-Key"
    },
    {
        "name": "X11SAE",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11sae_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11sae.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "Single socket H4 (LGA 1151) supports Intel\u00ae Xeon\u00ae processor E3-1200 v5/v6, Intel\u00ae 6th/7th Gen. Core\u2122 i7/i5/i3 series, Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC/non-ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "2 PCIe 3.0 x16, 3 PCIe 3.0 x1, ***2 PCIe x16 slots are running at x16/NA or x8/x8 *** 2 PCI, M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2242/2260/2280 Key: M-Key"
    },
    {
        "name": "X11SRM-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11srm-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11srm-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "Intel\u00ae Xeon\u00ae W-2100 Processors, Intel\u00ae Xeon\u00ae W-2200 Processors, Single Socket LGA-2066 (Socket R4) supported, CPU TDP supports Up to 165W TDP",
        "Memory": "Up to 256GB ECC RDIMM, DDR4-2933MHz; Up to 512GB ECC LRDIMM, DDR4-2933MHz, in 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x16, 2 PCIe 3.0 x8 M.2 Interface: 1 PCIe 3.0 x4 M.2 Form Factor: 2280 M.2 Key: M-Key"
    },
    {
        "name": "X11DAi-N",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dai-n_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dai-n.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only).",
        "Expansion Slots": "4 PCIe 3.0 x16, 2 PCIe 3.0 x8, 2 PCIe 3.0 NVMe x4 Internal Port(s)"
    },
    {
        "name": "X11DDW-L",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ddw-l_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ddw-l.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary WIO",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 3TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 3TB 3DS ECC LRDIMM, DDR4-2933MHz, in 12 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "1 PCIe 3.0 x32 Left Riser Slot, 1 PCIe 3.0 x16 Right Riser Slot"
    },
    {
        "name": "X11DDW-NT",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11ddw-nt_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11ddw-nt.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary WIO",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 2 UPI up to 10.4 GT/s",
        "Memory": "Up to 3TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 3TB 3DS ECC LRDIMM, DDR4-2933MHz, in 12 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only).",
        "Expansion Slots": "1 PCIe 3.0 x4, M.2 Interface: PCIe 3.0 x2 and SATA M.2 Form Factor: 2242, 2280 M.2 Key: M-Key"
    },
    {
        "name": "X11DPH-i",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dph-t_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dph-i.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 3 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz Or 2TB DCPMM, DDR4-2666MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "3 PCIe 3.0 x16, 4 PCIe 3.0 x8 M.2 Interface: 2 PCIe 3.0 x4 M.2 Form Factor: 2242/2260/2280/22110 M.2 Key: M-Key (RAID 0,1 support)"
    },
    {
        "name": "X11DPH-T",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dph-t_top_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dph-t.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 3 UPI up to 10.4 GT/s",
        "Memory": "Up to 4TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 4TB 3DS ECC LRDIMM, DDR4-2933MHz Or 2TB DCPMM, DDR4-2666MHz, in 16 DIMM slots",
        "Expansion Slots": "3 PCIe 3.0 x16, 4 PCIe 3.0 x8 M.2 Interface: 2 PCIe 3.0 x4, RAID 0,1 Form Factor: 2242/2260/2280/22110 Key: M-Key"
    },
    {
        "name": "X11DPH-Tq",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11dph-tq.jpg_1.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11dph-tq.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "E-ATX",
        "Processor": "Dual Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP, 3 UPI up to 10.4 GT/s",
        "Memory": "2933MHz Or 2TB DCPMM, DDR4-2666MHz, in 16 DIMM slots; Up to 2TB Intel\u00ae Optane\u2122 DC Persistent Memory in memory mode (Cascade Lake only)",
        "Expansion Slots": "3 PCIe 3.0 x16, 3 PCIe 3.0 x8 M.2 Interface: 2 PCIe 3.0 x4 M.2 Form Factor: 2242/2260/2280/22110 M.2 Key: M-Key (RAID 0,1 support)"
    },
    {
        "name": "X11SAE-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11sae-f_top-2.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11sae-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "ATX",
        "Processor": "Single socket H4 (LGA 1151) supports  Intel\u00ae Xeon\u00ae processor E3-1200 v5/v6,  Intel\u00ae 6th/7th Gen. Core\u2122 i7/i5/i3 series,  Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC/non-ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "2 PCIe 3.0 x16, 2 PCIe 3.0 x12 PCI 2 - 5V PCI 32bit ***2 PCIe x16 slots are running at x16/NA or x8/x8 ***, M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2242/2260/2280 Key: M-Key"
    },
    {
        "name": "X11SAE-M",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11sae-m_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11sae-m.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Micro-ATX",
        "Processor": "Single socket H4 (LGA 1151) supports  Intel\u00ae Xeon\u00ae processor E3-1200 v5/v6,  Intel\u00ae 6th/7th Gen. Core\u2122 i7/i5/i3 series,  Intel\u00ae Celeron\u00ae and Intel\u00ae Pentium\u00ae",
        "Memory": "Up to 64GB Unbuffered ECC/non-ECC UDIMM DDR4 2400MHz; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x16, 1 PCIe 3.0 x4 1 - 5V PCI 32bit, M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2242/2260/2280 Key: M-Key"
    },
    {
        "name": "X11SCL-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11scl-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11scl-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "8th/9th Generation Intel\u00ae Core\u2122i3/Pentium\u00ae/Celeron\u00ae Processor, Intel\u00ae Xeon\u00ae E-2100 Processor, Intel\u00ae Xeon\u00ae E-2200 Processor, Single Socket LGA-1151 (Socket H4) supported, CPU TDP supports Up to 95W TDP",
        "Memory": "Up to 128GB DDR4 2666MHz ECC UDIMM; 4 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16), 2 PCIe 3.0 x4 (in x8), M.2 Interface: 1 PCIe 3.0 x4 Form Factor: 2280/22110 Key: M-Key"
    },
    {
        "name": "X11SPG-TF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spg-tf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spg-tf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots",
        "Expansion Slots": "3 PCIe 3.0 x16 2x M.2 NGFF connectors M.2 Interface: PCIe 3.0 x4 Form Factor: 2280 Key: M-Key"
    },
    {
        "name": "X11SPM-F",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spm-f_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spm-f.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 165W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots; Up to 1TB Intel Optane DC Persistent Memory in memory mode (Cascade Lake Only)",
        "Expansion Slots": "2 PCIe 3.0 x16, 1 PCIe 3.0 x8 (in x8), M.2 Interface: PCIe 3.0 x4, Form Factor: 2280, 2242, Key: M-Key"
    },
    {
        "name": "X11SPM-TPF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spm-tpf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spm-tpf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "microATX",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 165W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots; Up to 1TB Intel Optane DC Persistent Memory in memory mode (Cascade Lake Only)",
        "Expansion Slots": "2 PCIe 3.0 x16, 1 PCIe 3.0 x8 (in x8), M.2 Interface: PCIe 3.0 x4, Form Factor: 2280, 2242, Key: M-Key"
    },
    {
        "name": "X11SPW-TF",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/x/1/x11spw-tf_top.jpg",
        "category": "motherboards",
        "url": "https://serverfactory.com/x11spw-tf.html",
        "Key Features": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "Form Factor": "Proprietary WIO",
        "Processor": "2nd Gen Intel\u00ae Xeon\u00ae Scalable Processors and Intel\u00ae Xeon\u00ae Scalable Processors, , Single Socket LGA-3647 (Socket P) supported, CPU TDP support Up to 205W TDP",
        "Memory": "Up to 1.5TB 3DS ECC RDIMM, DDR4-2933MHz; Up to 1.5TB 3DS ECC LRDIMM, DDR4-2933MHz, in 6 DIMM slots",
        "Expansion Slots": "1 PCIe 3.0 x8 (in x16 slot), 1 PCIe 3.0 x32 Left Riser Slot, M.2 Interface: PCIe 3.0 x4; SATA, Form Factor: 2280, 22110, Key: M-Key"
    },
    {
        "name": "Intel Core i3-10100",
        "price": "\u00a393.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/n/intel_10th_gen_core_i3_badge_1.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "4",
        "Total Threads": "8",
        "Max Turbo Frequency": "4.30 GHz",
        "Processor Base Frequency": "3.60 GHz",
        "Cache": "6 MB Intel Smart Cache",
        "Bus Speed": "8 GT/s",
        "TDP": "65 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel\u00ae Core\u2122 i9 processor 14900",
        "price": "\u00a3630.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/5/7/573d4466-1ce0-4058-9bcc-0c5c1a33b3a6.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "N/A",
        "Total Threads": "N/A",
        "Max Turbo Frequency": "N/A",
        "Processor Base Frequency": "N/A",
        "Cache": "N/A",
        "Bus Speed": "N/A",
        "TDP": "N/A"
    },
    {
        "name": "Intel Xeon Gold 6230 Processor",
        "price": "\u00a32,488.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/6/_/6_2.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "20",
        "Total Threads": "40",
        "Max Turbo Frequency": "3.90 GHz",
        "Processor Base Frequency": "2.10 GHz",
        "Cache": "27.5 MBTDP:125 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "125 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel Xeon Silver 4214 Processor",
        "price": "\u00a3874.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/o/i/oip_1__2.jpeg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "12",
        "Total Threads": "24",
        "Max Turbo Frequency": "3.20 GHz",
        "Processor Base Frequency": "2.20 GHz",
        "Cache": "16.5 MBTDP:85 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "85 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD EPYC\u2122 7302P Processor",
        "price": "\u00a3866.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/m/amd_9_1_21.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "16",
        "Total Threads": "32",
        "Max Turbo Frequency": "3.30 GHz",
        "Processor Base Frequency": "3.00 GHz",
        "Cache": "128 MBTDP:155 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "155 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD EPYC\u2122 7313P Processor",
        "price": "\u00a3862.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/m/amd_9_1_21_1.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "16",
        "Total Threads": "32",
        "Max Turbo Frequency": "3.70 GHz",
        "Processor Base Frequency": "3.00 GHz",
        "Cache": "128 MBTDP:155 WStarting from:  \u00a31,230.00",
        "Bus Speed": "8 GT/sConfigure",
        "TDP": "155 WStarting from:  \u00a31,230.00 Bus Speed:8 GT/sConfigure"
    },
    {
        "name": "Intel\u00ae Xeon\u00ae E-2414 Processor",
        "price": "\u00a3242.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/3/4/3401633-a.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "N/A",
        "Total Threads": "N/A",
        "Max Turbo Frequency": "N/A",
        "Processor Base Frequency": "N/A",
        "Cache": "N/A",
        "Bus Speed": "N/A",
        "TDP": "N/A"
    },
    {
        "name": "Intel Xeon E-2244G Processor",
        "price": "\u00a3366.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/o/i/oip.jpeg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "N/A",
        "Total Threads": "N/A",
        "Max Turbo Frequency": "N/A",
        "Processor Base Frequency": "N/A",
        "Cache": "N/A",
        "Bus Speed": "N/A",
        "TDP": "N/A"
    },
    {
        "name": "Intel Xeon Silver 4314 Processor (16 Cores, 2.4 Ghz)",
        "price": "\u00a3879.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/o/i/oip_1_.jpeg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "16",
        "Total Threads": "32",
        "Max Turbo Frequency": "3.40 GHz",
        "Processor Base Frequency": "2.40 GHz",
        "Cache": "24 MBTDP:135 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "135 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel Xeon Silver 4310 Processor  (12 Cores, 2.10 GHz)",
        "price": "\u00a3638.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/o/i/oip_1__1.jpeg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "12",
        "Total Threads": "24",
        "Max Turbo Frequency": "3.30 GHz",
        "Processor Base Frequency": "2.10 GHz",
        "Cache": "18 MBTDP:120 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "120 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel Xeon Gold 6330 Processor (28 Cores, 2.00 GHz)",
        "price": "\u00a32,204.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/6/_/6_2_1.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "28",
        "Total Threads": "56",
        "Max Turbo Frequency": "3.10 GHz",
        "Processor Base Frequency": "2.00 GHz",
        "Cache": "42 MBTDP:205 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "205 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD EPYC\u2122 7443P Processor",
        "price": "\u00a31,197.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/m/amd_9_1_21_1_1.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "24",
        "Total Threads": "48",
        "Max Turbo Frequency": "4.00 GHz",
        "Processor Base Frequency": "2.85 GHz",
        "Cache": "128 MBTDP:200 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "200 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD EPYC\u2122 7543 Processor",
        "price": "\u00a32,386.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/m/amd_9_1_21_1_1_1.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "32",
        "Total Threads": "64",
        "Max Turbo Frequency": "3.70 GHz",
        "Processor Base Frequency": "2.80 GHz",
        "Cache": "256 MBTDP:225 W",
        "Bus Speed": "8 GT/sStarting from:  \u00a31,230.00 Configure",
        "TDP": "225 WBus Speed:8 GT/sStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel\u00ae Xeon\u00ae E-2336 Processor",
        "price": "\u00a3355.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/n/intel_xeon__logo__2020_.svg.png",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "6",
        "Total Threads": "12",
        "Max Turbo Frequency": "4.80 GHz",
        "Processor Base Frequency": "2.90 GHz",
        "Cache": "12 MB Intel Smart Cache",
        "Bus Speed": "8 GT/s",
        "TDP": "65 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel\u00ae Xeon\u00ae E-2378G",
        "price": "\u00a3621.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/n/intel_xeon__logo__2020_.svg_1.png",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "8",
        "Total Threads": "16",
        "Max Turbo Frequency": "5.10 GHz",
        "Processor Base Frequency": "2.80 GHz",
        "Cache": "16 MB Intel Smart Cache",
        "Bus Speed": "8 GT/s",
        "TDP": "80 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel\u00ae Xeon\u00ae E-2388G",
        "price": "\u00a3728.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/n/intel_xeon__logo__2020_.svg_2.png",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "8",
        "Total Threads": "16",
        "Max Turbo Frequency": "5.10 GHz",
        "Processor Base Frequency": "3.20 GHz",
        "Cache": "16 MB Intel Smart Cache",
        "Bus Speed": "8 GT/s",
        "TDP": "95 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD EPYC 7452 Processor",
        "price": "\u00a3498.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/m/amd_epyc_rome.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "N/A",
        "Total Threads": "N/A",
        "Max Turbo Frequency": "N/A",
        "Processor Base Frequency": "N/A",
        "Cache": "N/A",
        "Bus Speed": "N/A",
        "TDP": "N/A"
    },
    {
        "name": "Intel\u00ae Xeon\u00ae Gold 5320 Processor (26 Cores, 2.20 GHz)",
        "price": "\u00a32,019.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/n/intel-xeon-gold-icx-6326-2-90-ghz-16c-32t-2p-24mb-185w-lga4189-cd8068904657502-1.jpeg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "26",
        "Total Threads": "52",
        "Max Turbo Frequency": "3.40 GHz",
        "Processor Base Frequency": "2.20 GHz",
        "Cache": "39 MB",
        "Bus Speed": "11.2 GT/s",
        "TDP": "185 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD Ryzen 9 7950X",
        "price": "\u00a3518.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/2/1296.jpg.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "16",
        "Total Threads": "32",
        "Max Turbo Frequency": "5.70 GHz",
        "Processor Base Frequency": "4.50 GHz",
        "Cache": "64 MBTDP:170 WStarting from:  \u00a31,230.00 Configure",
        "Bus Speed": "N/A",
        "TDP": "170 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD Ryzen 9 7900X",
        "price": "\u00a3403.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/2/1296.jpg_1.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "12",
        "Total Threads": "24",
        "Max Turbo Frequency": "5.60 GHz",
        "Processor Base Frequency": "4.70 GHz",
        "Cache": "64 MBTDP:170 WStarting from:  \u00a31,230.00 Configure",
        "Bus Speed": "N/A",
        "TDP": "170 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD Ryzen 9 7900",
        "price": "\u00a3391.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/2/1296.jpg_2.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "12",
        "Total Threads": "24",
        "Max Turbo Frequency": "5.40 GHz",
        "Processor Base Frequency": "3.70 GHz",
        "Cache": "64 MBTDP:65 WStarting from:  \u00a31,230.00 Configure",
        "Bus Speed": "N/A",
        "TDP": "65 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "AMD Ryzen 7 7700X",
        "price": "\u00a3345.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/r/y/ryzen7_badge.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "8",
        "Total Threads": "16",
        "Max Turbo Frequency": "5.40 GHz",
        "Processor Base Frequency": "4.50 GHz",
        "Cache": "32 MBTDP:105 WStarting from:  \u00a31,230.00 Configure",
        "Bus Speed": "N/A",
        "TDP": "105 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel\u00ae Xeon\u00ae Gold 5418Y Processor",
        "price": "\u00a31,704.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/b/a/badge-xeon-gold-processor.png",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "24",
        "Total Threads": "48",
        "Max Turbo Frequency": "3.80 GHz",
        "Processor Base Frequency": "2.00 GHz",
        "Cache": "45 MB",
        "Bus Speed": "16 GT/s",
        "TDP": "185 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel Xeon Platinum 8260 Processor",
        "price": "\u00a35,985.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/b/a/badge-xeon-platinum-processor.png",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "24",
        "Total Threads": "48",
        "Max Turbo Frequency": "3.90 GHz",
        "Processor Base Frequency": "2.40 GHz",
        "Cache": "35.75 MBTDP:165 WStarting from:  \u00a31,230.00 Configure",
        "Bus Speed": "N/A",
        "TDP": "165 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Intel\u00ae Core\u2122 i9-10940X X-series",
        "price": "\u00a3403.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/4/9/4981114_2.jpg",
        "category": "PROCESSOR",
        "Key Features/Applications": "N/A",
        "Total Cores": "14",
        "Total Threads": "28",
        "Max Turbo Frequency": "4.60 GHz",
        "Processor Base Frequency": "3.30 GHz",
        "Cache": "19.25 MB Intel Smart Cache",
        "Bus Speed": "8 GT/s DMI3",
        "TDP": "165 WStarting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 32GB DDR4-3200Mhz RDIMM Memory",
        "price": "\u00a3103.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image.png",
        "category": "Memory",
        "Size/Capacity": "32GB",
        "Memory Type": "DDR4 RDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 8GB 3200Mhz DDR4 RDIMM",
        "price": "\u00a362.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_5_.jpg",
        "category": "Memory",
        "Size/Capacity": "8GB",
        "Memory Type": "DDR4 RDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 64GB DDR4-3200Mhz RDIMM Memory",
        "price": "\u00a3222.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_1.png",
        "category": "Memory",
        "Size/Capacity": "64GB",
        "Memory Type": "DDR4 RDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 16GB DDR4-3200Mhz UDIMM Memory",
        "price": "\u00a358.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_1_1.png",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR4 UDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 16GB DDR4-3200Mhz SODIMM Memory",
        "price": "\u00a364.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/m/i/micron-ddr4-ecc-unbuffered-sodimm-2r8-mcw-c-550x550.jpg",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR4 ECC SODIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 32GB DDR4-3200Mhz SODIMM Memory",
        "price": "\u00a3103.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_7_.png",
        "category": "Memory",
        "Size/Capacity": "32GB",
        "Memory Type": "DDR4 ECC SODIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 16GB DDR4-3200Mhz RDIMM Memory",
        "price": "\u00a370.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_1_1_3.png",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR4 ECC RDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Samsung 64GB DDR4 3200MHz ECC RDIMM",
        "price": "\u00a3172.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/3/2/3263545-a_3.jpg",
        "category": "Memory",
        "Size/Capacity": "64GB",
        "Memory Type": "DDR4 ECC RDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Samsung 16GB DDR4 3200MHz ECC RDIMM",
        "price": "\u00a366.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/3/2/3263545-a_2.jpg",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR4 ECC RDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Samsung 32GB DDR4 3200MHZ ECC RDIMM",
        "price": "\u00a390.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/3/2/3263545-a_1.jpg",
        "category": "Memory",
        "Size/Capacity": "32GB",
        "Memory Type": "DDR4 ECC RDIMM",
        "Speed": "3200 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Samsung 32GB DDR5 5600MHz ECC RDIMM",
        "price": "\u00a3175.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/3/4/3493463-l-a.jpg",
        "category": "Memory",
        "Size/Capacity": "32GB",
        "Memory Type": "DDR5 ECC RDIMM",
        "Speed": "4800 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Samsung 16GB DDR5 4800Mhz ECC UDIMM",
        "price": "\u00a370.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/3/4/3493463-l-a_2.jpg",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR5 ECC UDIMM",
        "Speed": "4800 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Samsung 16GB DDR5 ECC RDIMM 4800MHz",
        "price": "\u00a397.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/3/4/3493463-l-a_1_1.jpg",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR5 ECC RDIMM",
        "Speed": "4800 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 16GB DDR5 PC5 RDIMM 4800MHz",
        "price": "\u00a3102.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_1_.png",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR5 ECC RDIMM",
        "Speed": "4800 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 32GB DDR5 PC5 RDIMM 4800MHz",
        "price": "\u00a3148.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_2_.png",
        "category": "Memory",
        "Size/Capacity": "32GB",
        "Memory Type": "DDR5 ECC RDIMM",
        "Speed": "4800 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 16GB DDR5 PC5 ECC UDIMM 4800MHz",
        "price": "\u00a3114.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_1__1.png",
        "category": "Memory",
        "Size/Capacity": "16GB",
        "Memory Type": "DDR5 ECC UDIMM",
        "Speed": "4800 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Micron 32GB DDR5 PC5 ECC UDIMM 4800MHz",
        "price": "\u00a3148.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/i/m/image_2__1.png",
        "category": "Memory",
        "Size/Capacity": "32GB",
        "Memory Type": "DDR5 ECC UDIMM",
        "Speed": "4800 MHz",
        "Pins": "288Starting from:  \u00a31,230.00 Configure"
    },
    {
        "name": "Samsung DDR5 32GB ECC UDIMM 4800 MHz Memory",
        "price": "\u00a3176.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/4/2/4260751598423.jpg",
        "category": "Memory",
        "Size/Capacity": "N/A",
        "Memory Type": "N/A",
        "Speed": "N/A",
        "Pins": "N/A"
    }
    
]




function displayProducts() {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('components');
    console.log('Category from URL:', category);
    console.log('test')

    const productListContainer = document.querySelector('.product-list');
    productListContainer.innerHTML = ''; 

    if (!category) {
        productListContainer.innerHTML = '<p>Please select a valid category.</p>';
        return;
    }

    const filteredProducts = products.filter(product => product.category === category);

    if (filteredProducts.length === 0) {
        productListContainer.innerHTML = '<p>No products found for this category.</p>';
        return;
    }

    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product1';

        // Conditionally structure the content based on the category
        let productContent = '';
        
        if (category === 'Memory') {
            productContent = `
                 <div class="imageProduct1">
                   <img src="${product.img}" alt="${product.name}">
               </div>
               <div class="productContent">
                   <p>${product.name}</p>
                   <p class="Chassis">Size/Capacity: ${product["Size/Capacity"]}</p>
               </div>
               <div class="configure" onclick="navigatecomponentDetails('${product.name}')">
                   Configure Now
               </div>
           
            `
        } else if (category === 'GPUs') {
            // For GPUs: Display memory size and clock speed
            productContent = `
                <div class="imageProduct1">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="productContent">
                    <p>${product.name}</p>
                    <p class="MemorySize">Memory Size: ${product["Memory Size"]}</p>
                    <p class="ClockSpeed">Clock Speed: ${product["Clock Speed"]}</p>
                </div>
                <div class="configure" onclick="navigatecomponentDetails('${product.name}')">
                    Configure Now
                </div>
            `
        } else if (category === 'motherboards') {
            productContent = `
                 <div class="imageProduct1">
                   <img src="${product.img}" alt="${product.name}">
               </div>
               <div class="productContent">
                   <p>${product.name}</p>
                    <p class="Chassis">Processor: ${product["Processor"]}</p>
               </div>
               <div class="configure" onclick="navigatecomponentDetails('${product.name}')">
                   Configure Now
               </div>
           
            `
        } else {
            productContent = `
                <div class="imageProduct1">
                    <img src="${product.img}" alt="${product.name}">
                </div>
                <div class="productContent">
                    <p>${product.name}</p>
                    <p class="Chassis">Details: ${product[ "Total Cores"]}</p>
                </div>
                <div class="configure" onclick="navigatecomponentDetails('${product.name}')">
                    Configure Now
                </div>
            `
        }

        // Now set the content to the productDiv
        productDiv.innerHTML = productContent;
        productListContainer.appendChild(productDiv);
    });
}



document.addEventListener('DOMContentLoaded', displayProducts);


function navigateToProducts(name) 
{window.location.href = `productlist.html?category=${encodeURIComponent(name)}`;}

function navigateToComponents(name) 
{window.location.href = `componentList.html?components=${encodeURIComponent(name)}`;}


function navigatecomponentDetails(name) 
{window.location.href = `componentdetailPage.html?name=${encodeURIComponent(name)}`;}


function navigateproductDetails(name) 
{window.location.href = `productdetailPage.html?name=${encodeURIComponent(name)}`;}