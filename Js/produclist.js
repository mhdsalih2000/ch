function displayProducts() {
    // Get category from URL query parameters
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const category = urlParams.get('category');

    console.log('Category from URL:', category);
    console.log('test')

    // Get the product list container
    const productListContainer = document.querySelector('.product-list');
    productListContainer.innerHTML = ''; // Clear existing content


    if (!category) {
        productListContainer.innerHTML = '<p>Please select a valid category.</p>';
        return;
    }

    // Filter products based on the category
    const filteredProducts = products.filter(product => product.category === category);

    // Display message if no products are found
    if (filteredProducts.length === 0) {
        productListContainer.innerHTML = '<p>No products found for this category.</p>';
        return;
    }

    // Display filtered products
    filteredProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product1';

        productDiv.innerHTML = `
            <div class="imageProduct1">
                <img src="${product.img}" alt="${product.name}">
            </div>
            <div class="productContent">
                <p>${product.name}</p>
                <p class="Chassis">Chassis: ${product.Chassis}</p>
                <p class="learn_more">
                    <a href="${product.url}" target="_blank">Learn More</a>
                </p>
            </div>
            <div class="congigur" onclick="navigateToProducts('${product.name}')">
                Configure Now
            </div>
        `;
        productListContainer.appendChild(productDiv);
    });
}





const products = [
    
    {
        "name": "SuperMicro SuperStorage 6049P-E1CR24L",
        "price": "\u00a33,706.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/u/supermicro-server-6049p-e1cr24l-overview-limg.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Corporate Database, Database Processing & Storage, Enterprise Server, HPC, Data Center, iSCSI SAN",
        "CPU": "Dual Socket P (LGA 3647) support     2nd Gen Intel Xeon Scalable     processors",
        "Chassis": "4U / 1 Node",
        "Drive": "24x Hot-swap 3.5\" SAS3/SATA3     drive bays; 2x hot-swap 2.5\"     SATA3 drive bays (rear)",
        "RAM": "16x DDR4 DIMM Slots",
        "Network Ports": "2x 10GBase-T LAN ports with, Intel X722 + PHY Intel X557Configure"
    },
    {
        "name": "SuperStorage 2029P-ACR24H/L",
        "price": "\u00a33,700.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-2029p-acr24h_1.jpeg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Corporate Database, Database Processing & Storage, Enterprise Server, HPC, Data Center, iSCSI SAN",
        "CPU": "Dual Socket P (LGA 3647) support     2nd Gen Intel Xeon Scalable     processors",
        "Chassis": "2U / 1 Node",
        "Drive": "24x Hot-swap 2.5\" SAS3/SATA3",
        "RAM": "16x DDR4 DIMM Slots",
        "Network Ports": "2x 10GBase-T LAN ports with     Intel X722 + PHY Intel X557Configure"
    },
    {
        "name": "SuperMicro SuperStorage 2029P-E1CR24H/L",
        "price": "\u00a33,598.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-2029p-e1cr24h.png",
        "category": "Storage Solutions",
        "Key Features/Applications": "Corporate Database, Database Processing & Storage , Enterprise Server, HPC, Data Center, iSCSI SAN",
        "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors",
        "Chassis": "2U / 1 Node",
        "Drive": "24x Hot-swap 2.5\" SAS3/SATA3 drive bays including 4x optional NVMe drives; 2x Hot-swap 2.5\" SATA3 drive bays (rear), 2x M.2 NVMe. Expander based backplane.",
        "RAM": "16x DDR4 DIMM Slots",
        "Network Ports": "2x 10GBase-T LAN ports with Intel X722 + PHY Intel X557Configure"
    },
    {
        "name": "SuperMicro SuperStorage SSG-6029P-E1CR(12/16)(L/T)",
        "price": "\u00a33,207.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6029p-e1cr12t.jpeg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Corporate Database, Database Processing & Storage, Enterprise Server, HPC, Data Center, iSCSI SAN",
        "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors",
        "Chassis": "2U / 1 Node",
        "Drive": "12x Hot-swap 3.5\" SAS3/SATA3 drive bays including, 4x optional NVMe drives; 2x hot-swap 2.5\" SATA3 drive bays (rear), 2x M.2 NVMe, Expander based backplane",
        "RAM": "16x DDR4 DIMM Slots",
        "Network Ports": "2x 10GBase-T LAN ports with Intel X722 + PHY Intel X557 Configure"
    },
    {
        "name": "SuperStorage 6029P-E1CR24L (Complete System Only)",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6029p-e1cr24h_3b.gif.jpeg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Corporate Database, Database Processing & Storage, Enterprise Server, HPC, Data Center, iSCSI SAN",
        "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake)",
        "Chassis": "1U Rackmountable",
        "Drive": "24 Hot-swap 3.5\" SAS3/SATA3 drive bays; 2 hot-swap 2.5\" SATA3 drive bays (rear) Expander based backplane",
        "RAM": "24 DIMMs; up to 6TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
        "Network Ports": "1 RJ45 Dedicated IPMI LAN portRequest Quote"
    },
    {
        "name": "SuperStorage 5049P-E1CRR45(H/L) (Complete System Only)",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-5049p-e1cr45h-open-nolid_1.png",
        "category": "Storage Solutions",
        "Key Features/Applications": "Backup Storage, Cold Storage, Database Applications, Data Warehousing, Archiving",
        "CPU": "Single Socket P (LGA 3647) supports, 2nd Gen Intel Xeon Scalable, processor",
        "Chassis": "4U / 1 Node",
        "Drive": "45 Hot-swap 3.5\" SAS3/SATA3 drive     bays, 2 rear Hot-swap 2.5\" SATA     drive bays; optional 2 rear     Hot-swap 2.5\" SATA3/NVMe",
        "RAM": "8x DDR4 DIMM Slots",
        "Network Ports": "Server remote management: IPMI 2.0     / KVM over LAN / Media over LANRequest Quote"
    },
    {
        "name": "SuperStorage 5049P-E1CTR36L",
        "price": "\u00a35,956.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-5049p-e1ctr36l.gif_1.jpeg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Connectivity/Storage Compute Nodes, Database Processing Appliance Platform",
        "CPU": "Single 2nd Gen Intel Xeon Scalable processor, up to 28 Cores, up to 56 Threads, 70-205W",
        "Chassis": "4U",
        "Drive": "36 Hot-swap 3.5\" SAS/SATA drive bays with SES3 (24 front + 12 rear); 2 Internal fixed bay support up to 4x 2.5\" drive bays (optional) 4 Internal fixed 2.5\" drive bays 2 Hot-swap 2.5\" NVMe/SATA (rear, optional)",
        "RAM": "8 DIMMs; up to 2TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM",
        "Network Ports": "2x 10GBase-T with Intel X557 and 1 dedicated LAN for IPMI 2.0Configure"
    },
    {
        "name": "SuperMicro SuperStorage 6049P-E1CR45H/L (Complete System Only)",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6049p-e1cr45h.png",
        "category": "Storage Solutions",
        "Key Features/Applications": "Corporate Database, Database Processing & Storage, Enterprise Server, HPC, Data Center, iSCSI SAN",
        "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors",
        "Chassis": "4U / 1 Node",
        "Drive": "45x Hot-swap 3.5\" SAS3/SATA3 drive bays with SES3 (can support 2.5\" without converter tray); 2 rear Hot-swap 2.5\" drive bays; optional 6 NVMe bays",
        "RAM": "24x DDR4 DIMM Slots",
        "Network Ports": "Server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
    },
    {
        "name": "SuperServer F619P2-FT",
        "price": "\u00a39,464.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-f619p2-ft_pullout.gif-2.jpeg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Compute Intensive Applications, Data Center, HPC and Enterprise Applications, Hyperscale, Hyperconverged, VM, Social NetworkingCPU (Per Node): Dual 2nd Gen Intel Xeon Scalable, Up to 28 Cores, Up to 56 Threads, 70-165WChassis (Per Node): 4U / 8 NodesDrives (Per Node):2 or 4 Fixed 2.5\" SATA3/NVMe drive bays, M.2 Interface: 2 SATA/PCI-E 3.0 x4, RAID 0 & 1/p>RAM (Per Node):12 DIMMs; up to 3TB 3DS ECC     DDR4-2933MHz RDIMM/LRDIMM,Network Ports (Per Node):Dual GbE ports via SIOM Network card,     1 dedicated IPMI LAN portConfigure",
        "CPU": "N/A",
        "Chassis": "N/A",
        "Drive": "N/A",
        "RAM": "N/A",
        "Network Ports": "N/A"
    },
    {
        "name": "SuperMicro SuperStorage 6019P-ACR12L+",
        "price": "\u00a32,709.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6019p-acr12l_pullout.gif.jpeg",
        "category": "Storage Solutions",
        "Key Features/Applications": "High Density Storage, Object Storage 1U, Scale-out Storage, Ceph / Hadoop, Big Data Analytics",
        "CPU": "Dual Socket P (LGA 3647) support 2nd Gen. Intel Xeon Scalable processors (Cascade Lake/Skylake)",
        "Chassis": "1U Rackmountable",
        "Drive": "12 Hot-swap 3.5\" SAS3/SATA3, 4 Hot- swap 2.5\" 7mm NVMe/SATA drive bays",
        "RAM": "12 DIMMs; up to 3TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
        "Network Ports": "2x 10GBase-T ports via Intel C622Request Quote"
    },
    {
        "name": "Storage SuperServer SSG-640SP-DE2CR90 (Complete System Only)",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-640sp-de2cr90_callout_angle.jpg.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "N/A",
        "CPU": "Dual socket 3rd Gen Intel Xeon Scalable processors, up to 72 Cores Per Node",
        "Chassis": "4U Rackmount / 2 Nodes",
        "Drive": "90 3.5\"/2.5\" Hot-swap SAS3 drives, 2x Fixed slim SATA SSD, 2x NVMe M.2 (form factor: 2280 and 22110)",
        "RAM": "16 ECC DDR4-3200: LRDIMM/RDIMM",
        "Network Ports": "2x 10GbE BaseT with X550Request QuoteCheck out our blog about SSG-640SP-DE2CR90"
    },
    {
        "name": "Supermicro AS -1124US-TNRP (Complete System Only)",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-1124us-tnrp.gif-4.png",
        "category": "Storage Solutions",
        "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
        "CPU": "Dual AMD EPYC\u2122 7003/7002 Series Processors",
        "Chassis": "1U",
        "Drive": "12 Hot-swap 2.5\" U.2 NVMe drive bays or SATA3/SAS3 (via optional SAS kit)",
        "RAM": "32x DDR4 DIMM Slots",
        "Network Ports": "Dual-port 10GBase-T and Dual-port 10G SFP+ via Intel X710-TM4Request QuoteCheck out our blog about AS -1124US-TNRP"
    },
    {
        "name": "Supermicro SuperServer F619P2-RC1",
        "price": "\u00a312,678.00",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-f619p2-rt_pull_out.gif.jpeg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
        "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake)",
        "Chassis": "4U / 8 Nodes",
        "Drive": "6 Hot-swap 2.5\" SAS3/SATA3 or 2 Hot-swap 2.5\" SAS3/SATA3 + 4 optional NVMe U.2",
        "RAM": "12 DIMM slots, Up to 3TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
        "Network Ports": "Flexible networking via SIOM ,Support for Intelligent Platform Management Interface v.2.0, IPMI 2.0 with virtual media over LAN and KVM-over-LAN supportStarting from:  \u00a310,565.00 Configure/Request Quote"
    },
    {
        "name": "Supermicro Storage SuperServer SSG-620P-ACR12H",
        "price": "\u00a33,160.80",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-620p-acr12h_callout_angle.jpg_1.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Key Features",
        "CPU": "Dual Socket P+ (LGA-4189) 3rd Gen Intel Xeon Scalable Processors",
        "Chassis": "2U Rackmountable",
        "Drive": "12x 3.5\" hot-swap hybrid SATA/SAS drive bays (4 NVMe Hyprid Ports); 2 rear SATA 2.5\" slots; onboard 1 M.2 NVMe",
        "RAM": "16 ECC DDR4-3200: LRDIMM/RDIMM + 2 Intel Optane\u2122 Persistent Memory Dedicated Slots",
        "Network Ports": "2x 10GbE BaseT with Intel X550Request Quote"
    },
    {
        "name": "Supermicro Storage A+ Server ASG-1115S-NE316R (Complete System Only)",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/asg-1115s-ne316r_callout_angle.jpg.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Software-defined Storage, In-Memory Computing, Data Intensive HPC, Private & Hybrid Cloud, NVMe Over Fabrics Solution",
        "CPU": "Single Socket SP5 AMD EPYC\u2122 9004 Series processors. Up to 300W TDP.",
        "Chassis": "1U Rackmount",
        "Drive": "16x hot-swap E3.S (7.5mm) NVMe drive bays",
        "RAM": "Supports 24 DIMMs with 2DPC, up to 6TB memory capacity with 24 DIMMs of 256GB 3DS RDIMM/RDIMM DDR5 ECC memory",
        "Network Ports": "AIOMRequest Quote"
    },
    {
        "name": "Promise VTrak J5960 JBOD",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/t/h/thumb-vtrak-j5960.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "High-Density Storage, Expansion up to 8 Petabytes, Optimized for High-Performance DatacenterChassis:4U60 Bays JBOD storage chassisDrive:60x drives Dual IOM : 12 Gb SAS HDD and SSD drives Single IOM : 12 Gb SAS , or 6 Gb SATA HDD and SSD drivesNetwork Ports:1 Gigabit Ethernet each IOM (management port) 1 RJ11 each IOM (management port)Expansion:Up to 8 sets of J5960 4U60 JBODsHost Interface/ External IO Port:6 Mini SAS HD connectors (SFF-8644) for upstream or downstream each IOM, 1 Gigabit Ethernet each IOM (management port), 1 RJ11 each IOM (management port)Hot Swappable FRU:HDD, IO Module, Power Supply Module, FanPower Supply:80 PLUS Platinum 1200W Redundant Power Supply",
        "CPU": "N/A",
        "Chassis": "4U60 Bays JBOD storage chassis",
        "Drive": "60x drives Dual IOM : 12 Gb SAS HDD and SSD drives Single IOM : 12 Gb SAS , or 6 Gb SATA HDD and SSD drivesNetwork Ports:1 Gigabit Ethernet each IOM (management port) 1 RJ11 each IOM (management port)Expansion:Up to 8 sets of J5960 4U60 JBODsHost Interface/ External IO Port:6 Mini SAS HD connectors (SFF-8644) for upstream or downstream each IOM, 1 Gigabit Ethernet each IOM (management port), 1 RJ11 each IOM (management port)Hot Swappable FRU:HDD, IO Module, Power Supply Module, FanPower Supply:80 PLUS Platinum 1200W Redundant Power Supply",
        "RAM": "N/A",
        "Network Ports": "1 Gigabit Ethernet each IOM (management port) 1 RJ11 each IOM (management port)Expansion:Up to 8 sets of J5960 4U60 JBODsHost Interface/ External IO Port:6 Mini SAS HD connectors (SFF-8644) for upstream or downstream each IOM, 1 Gigabit Ethernet each IOM (management port), 1 RJ11 each IOM (management port)Hot Swappable FRU:HDD, IO Module, Power Supply Module, FanPower Supply:80 PLUS Platinum 1200W Redundant Power Supply"
    },
    {
        "name": "Promise VTrak J5800 JBOD",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/v/t/vtrak_j5800_front.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Affordable Enterprise-level Storage, Data Center Hybrid HDD/SSD Arrays, Optimized for High-Performance DatacenterChassis:4U/24 Bays JBOD storage chassisDrive:24x drivesNetwork Ports:1 x RJ-45 1Gb Ethernet per IOM, 1 x RJ-11 Serial Port per IOMHost Interface/ External IO Port:6 Mini SAS HD connectors (SFF-8644) for upstream or downstream each IOM, 1 Gigabit Ethernet each IOM (management port), 1 RJ11 each IOM (management port)Hot Swappable FRU:HDD, Power Supply ModulePower Supply:80 PLUS Platinum 1+1 600W Redundant Power SupplyRequest Quote",
        "CPU": "N/A",
        "Chassis": "4U/24 Bays JBOD storage chassis",
        "Drive": "24x drivesNetwork Ports:1 x RJ-45 1Gb Ethernet per IOM, 1 x RJ-11 Serial Port per IOMHost Interface/ External IO Port:6 Mini SAS HD connectors (SFF-8644) for upstream or downstream each IOM, 1 Gigabit Ethernet each IOM (management port), 1 RJ11 each IOM (management port)Hot Swappable FRU:HDD, Power Supply ModulePower Supply:80 PLUS Platinum 1+1 600W Redundant Power SupplyRequest Quote",
        "RAM": "N/A",
        "Network Ports": "1 x RJ-45 1Gb Ethernet per IOM, 1 x RJ-11 Serial Port per IOMHost Interface/ External IO Port:6 Mini SAS HD connectors (SFF-8644) for upstream or downstream each IOM, 1 Gigabit Ethernet each IOM (management port), 1 RJ11 each IOM (management port)Hot Swappable FRU:HDD, Power Supply ModulePower Supply:80 PLUS Platinum 1+1 600W Redundant Power SupplyRequest Quote"
    },
    {
        "name": "Supermicro Storage SuperServer SSG-641E-E1CR24H New",
        "price": "\u00a33,997.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-641e-e1cr24h_main.jpg.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
        "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
        "Chassis": "4U Rackmount",
        "Drive": "24x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
        "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
        "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
    },
    {
        "name": "Supermicro Storage SuperServer SSG-641E-E1CR36H New",
        "price": "\u00a34,778.40",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-641e-e1cr36h_main.jpg.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
        "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
        "Chassis": "4U Rackmount",
        "Drive": "36x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
        "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
        "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
    },
    {
        "name": "Supermicro Storage SuperServer SSG-631E-E1CR16H New",
        "price": "\u00a33,853.20",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-631e-e1cr16h_main.jpg.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
        "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
        "Chassis": "3U Rackmount",
        "Drive": "16x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
        "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
        "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
    },
    {
        "name": "Storage SuperServer SSG-621E-ACR12H New",
        "price": "\u00a33,273.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-621e-acr12h_main.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
        "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
        "Chassis": "2U Rackmountable",
        "Drive": "12x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
        "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
        "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
    },
    {
        "name": "Storage SuperServer SSG-521E-E1CR24H (Complete System Only ) New",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-521e-e1cr24h_main.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
        "CPU": "Single Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processor. Up to 300W TDP.",
        "Chassis": "2U Rackmount",
        "Drive": "24 3.5\" Hot-swap SAS3/SATA3 drives, 2x Rear SATA Slots, 4x Optional Rear NVMe Slots, 2x NVMe/SATA M.2 (form factor: 2280)",
        "RAM": "16 ECC DDR5-5600: LRDIMM/RDIMM",
        "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s)Request Quote"
    },
    {
        "name": "Storage A+ Server ASG-2015S-E1CR24H (Complete System Only ) New",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/asg-2015s-e1cr24h_main.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
        "CPU": "Single Socket SP5 4th Generation AMD EPYC\u2122 9004 Scalable Processors. Up to 290W TDP",
        "Chassis": "2U Rackmount",
        "Drive": "24 3.5\" Hot-swap SAS3/SATA3 drives, 2x Rear SATA Slots, 4x Optional Rear NVMe Slots, 2x NVMe M.2 (form factor: 2280/22110)",
        "RAM": "12 ECC DDR5-4800: LRDIMM/RDIMM",
        "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s) / AIOMRequest Quote"
    },
    {
        "name": "Supermicro Storage SuperServer SSG-640SP-E1CR60 (Complete System Only)",
        "price": "N/A",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-640sp-e1cr60_callout_rear.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "Big Data & Analytics, Data Lake, HPC and AI/ML WorkloadsTelco & Cloud Service Providers, Financial Services & Healthcare Image Archives, Content Repositories, Government Data Protection",
        "CPU": "Dual socket 3rd Gen Intel Xeon Scalable processors, up to 72 Cores",
        "Chassis": "4U Rackmount",
        "Drive": "60 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Fixed slim SATA SSD, 2x NVMe M.2 (form factor: 2280 and 22110)",
        "RAM": "16 ECC DDR4-3200: LRDIMM/RDIMM",
        "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s), 2 RJ45 10 GBASE-T LAN port(s)Request Quote"
    },
    {
        "name": "Supermicro SuperChassis 829HE1C4-R1K62LPB",
        "price": "\u00a31,557.60",
        "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6029p-e1cr16t.jpg",
        "category": "Storage Solutions",
        "Key Features/Applications": "N/A",
        "CPU": "N/A",
        "Chassis": "N/A",
        "Drive": "N/A",
        "RAM": "N/A",
        "Network Ports": "N/A"
    },
{
    "name": "Supermicro Mainstream A+ Server AS -2015A-TR",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-2015a-tr_callout_angle.jpg.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "Designed for financial companies, AMD Xilinx Solarflare X2 and X3 Ethernet adapters validated",
    "CPU": "AMD EPYC\u2122 4004 Series LGA1718 up to 170W TDP Processors",
    "Chassis": "2U Rackmount",
    "Drive": "8 front hot-swap 3.5\" SAS/SATA drive bay(s)",
    "RAM": "4 DDR5-5200 UDIMM ECC/Non-ECC slots supporting up to 192GB memory",
    "Network Ports": "IPMI 2.0 + KVM with Dedicated LAN (1GbE), Dual 1GbE LAN (Intel I210-AT)Starting from:  \u00a31,324.00 Configure"
},
{
    "name": "Supermicro CloudDC SuperServer SYS-122C-TN (Complete System Only) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-122c-tn_main.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "12 front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays (*NVMe/SAS/SATA support may require additional storage controller and/or cables)",
    "RAM": "Slot Count: 32 DIMM slots Max Memory (2DPC): Up to 2TB 6400MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)]Coming Soon Request Quote"
},
{
    "name": "Supermicro WIO SuperServer SYS-112B-WR (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-112b-wr_main.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "Virtualization, Networking Appliance, Cloud Computing, Data Center Optimized, Database/Storage, Storage Headnode, Entry GPU server, Web Cache, CDN, Video Streaming, AI Inference",
    "CPU": "Single Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "8 front hot-swap 2.5\" SATA drive bays",
    "RAM": "32x DDR4 DIMM Slots",
    "Network Ports": "2 RJ45 1 GbE LAN port(s) 1 RJ45 1 GbE Dedicated BMC LAN port(s) (IPMI shared on LAN port 1)Request Quote"
},
{
    "name": "Supermicro CloudDC SuperServer SYS-112C-TN (Complete System Only ) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-112c-tn_main.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "Virtualization, HPCCDN, Edge Nodes, Cloud Computing, Data Center Optimized, Storage Headnode",
    "CPU": "Single Socket E2 (LGA-4710), Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "8 front hot-swap 2.5\" PCIe 5.0 NVMe/SAS*/SATA* drive bays",
    "RAM": "16 DIMM slots/8 Channels",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Request Quote"
},
{
    "name": "Western Digitial Ultrastar Data60 Hybrid Storage Platform 216TB-1320TB",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/u/l/ultrastar-data60-hybrid-storage-platform-right-1-western-digital.png.wdthumb.1280.1280.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "High Density and Flexibility , Designed for the Enterprise and the CloudDrives:60 x 3.5in drive baysDrive Interface:12Gb/s SAS, 6Gb/s SATAChassis:4UDaisy Chain:Up to 4 units may be daisy-chained for a total raw capacity of 6.72PBHost Interface:Dual redundant I/O Modules (IOM), 6 Mini-SAS HD ports per IOMPower:Platinum: Dual 200-240V AC, 1600W, 1800W, Titanium: Dual 200-240V AC, 1600WCooling:4 main enclosure fans, front-to-rear system cooling with zero-loss backflow prevention, 1 IO module fan, Dual PSUs with built-in fansRequest Quote",
    "CPU": "N/A",
    "Chassis": "4UDaisy Chain:Up to 4 units may be daisy-chained for a total raw capacity of 6.72PBHost Interface:Dual redundant I/O Modules (IOM), 6 Mini-SAS HD ports per IOMPower:Platinum: Dual 200-240V AC, 1600W, 1800W, Titanium: Dual 200-240V AC, 1600WCooling:4 main enclosure fans, front-to-rear system cooling with zero-loss backflow prevention, 1 IO module fan, Dual PSUs with built-in fansRequest Quote",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "Hyper SuperServer SYS-122H-TN (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-122h-tn_main.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "Virtualization, Software-defined Storage, High Performance Computing, Cloud Computing, Enterprise Server",
    "CPU": "Dual Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "8x 2.5\" hot-swap NVMe/SATA/SAS drive bays; Optional 4x 2.5\" hot-swap NVMe/SAS/SATA drive bays; 2x internal M.2 NVMe drive slots; Optional RAID support via storage add-on card",
    "RAM": "Slot Count: 32 DIMM slots Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM Max Memory (2DPC): Up to 4TB 5200MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Request Quote"
},
{
    "name": "Supermicro Storage SuperServer SSG-122B-NE316R (Complete System Only ) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-122b-ne316r_main.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "Software-defined Storage, In-Memory Computing, Scale Out All-Flash NVMe Storage, Data Intensive HPC, Private & Hybrid Cloud, NVMe Over Fabrics Solution, Enhanced Graphics & AI, Generative AI",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U Rackmount",
    "Drive": "16 front hot-swap E3.S 1T NVMe drive bays",
    "RAM": "32 DIMM slots/2 Channels: Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM/LRDIMM or Max Memory (2DPC): Up to 8TB 5200MT/s ECC DDR5 RDIMM/LRDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Coming Soon Request Quote"
},
{
    "name": "Supermicro Storage SuperServer SSG-222B-NE3X24R (Complete System Only) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-222b-ne3x24r_main.jpg",
    "category": "Storage Solutions",
    "Key Features/Applications": "Software-defined Storage, In-Memory Computing, Scale Out All-Flash NVMe Storage, Data Intensive HPC, Private & Hybrid Cloud, NVMe Over Fabrics Solution, AI/Deep Learning Training and Inference",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U Rackmount",
    "Drive": "Default: 24 front hot-swap E3.S 1T PCIe 5.0 x4 NVMe drive bays. Option A: Total 32 bays 32 front hot-swap E3.S 1T PCIe 5.0 x4 NVMe drive bays. Option B: Total 24 bays 16 front hot-swap E3.S 1T PCIe 5.0 x4 NVMe drive bays, 8 front fixed E3.S 2T PCIe 5.0 x8 CXL Type 3 drive bays. Option C: Total 16 bays, 8 front hot-swap E3.S 1T PCIe 5.0 x4 NVMe drive bays, 8 front fixed E3.S 2T PCIe 5.0 x8 CXL Type 3 drive bays",
    "RAM": "16+16 DIMM slots (2DPC), supports DDR4 RDIMM, LRDIMM, RDIMM/LRDIMM-3DS, Intel Optane\u2122 Persistent Memory 200 series",
    "Network Ports": "1 OCP NIC 3.0 (PCIe4.0 x16) [CPU1]Coming Soon Request Quote"
},
{
    "name": "Supermicro SuperServer 5019D-4C-FN8TP",
    "price": "\u00a31,112.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5019d-fn8tp.png",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Single Intel Xeon D-2123IT, 4-Core, 8 Threads, 60W",
    "Chassis": "1U / 1 Node",
    "Drive": "1x Internal 3.5\" or 4 Internal 2.5\" drive bays",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE, 2x 10GBase-T, 2x 10G SFP+ and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "SuperServer 1029P-WTRT",
    "price": "\u00a33,355.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-1029p-wtrt_top.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Web Server, Firewall Apps., Corporate-Wins, DNS, Print, Login, Gateway, provisioning servers, Compact Network Appliance, Cloud Computing",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake)",
    "Chassis": "1U Rackmount",
    "Drive": "10 Hot-swap 2.5\" SAS/SATA HDD bays (default 8 SATA3, 2 NVMe or SATA3)",
    "RAM": "12 DIMMs; up to 3TB 3DS ECC DDR4-2933MHz\u2020 RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
    "Network Ports": "2x 10GBase-T LAN ports via Intel C622Starting from:  \u00a31,435.00 Configure"
},
{
    "name": "Supermicro SuperServer 1029GQ-T(N)RT",
    "price": "\u00a35,258.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-1029gq-trt.png",
    "category": "rackmount",
    "Key Features/Applications": "Edge Computing, Micro Data Center, AI/ML, Deep Learning Training and Inference, Virtualization, Cloud Computing",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors",
    "Chassis": "1U / 1 Node",
    "Drive": "2x Hot-swap 2.5\" SAS/SATA     drive bays, 2x Internal 2.5\" SATA drive bays",
    "RAM": "12x DDR4 DIMM Slots",
    "Network Ports": "2x 10GBase-T LAN ports via Intel X540Configure"
},
{
    "name": "Supermicro SuperServer 1029GQ-TXRT (Complete System Only)",
    "price": "\u00a34,290.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/r/_/r_6_.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Edge Computing, Micro Data Center, AI/ML, Deep Learning Training and Inference, Virtualization, Cloud Computing",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake",
    "Chassis": "1U Rackmountable",
    "Drive": "2 Hot-swap 2.5\" SAS/SATA drive bays, 2 Internal 2.5\" drive bays, Optional NVMe U.2 drive option",
    "RAM": "12 DIMMs; up to 3TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
    "Network Ports": "2x 10GBase-T LAN ports via Intel X540Request Quote"
},
{
    "name": "SuperMicro SuperStorage 5019D8-TR12P (Complete system only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-5019d8-tr12p.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Object Storage/Warm Storage, Content Delivery Network (CDNs), Multi-access Edge Computing, VM and SMB Servers",
    "CPU": "Intel Xeon processor D-2146NT,     8-Core, 16 Threads, 80W",
    "Chassis": "1U / 1 Node",
    "Drive": "12x Hot-swap 3.5\" SATA3 bays;      2x SSD or 1 U.2 supported by AOC",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE, 2x 10GBase-T, 2x 10G SFP+     and 1 dedicated LAN for IPMI 2.0Request Quote"
},
{
    "name": "Supermicro SuperServer 6019P-MT",
    "price": "\u00a31,768.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/d/5/d50dd9a1-b1e5-4850-83e2-c581c854ac7d_1.724fd24c8c6f87566609863d787bcbd4.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Data Center Optimized, Web Server, Enterprise Server, Managed Hosting, Short Depth",
    "CPU": "Dual Socket P (LGA 3647) support     2nd Gen Intel Xeon Scalable     processors",
    "Chassis": "1U / 1 Node",
    "Drive": "4x Hot-swap 3.5\" SATA3 drive bays",
    "RAM": "8x DDR4 DIMM Slots",
    "Network Ports": "2 GbE LAN ports via Marvell 88E1512Configure"
},
{
    "name": "SuperMicro SuperServer 6029P-TR(T)",
    "price": "\u00a33,910.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-6029p-tr.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Cloud and Virtualization needs, Compute Intensive Application, Database Processing and Storage, High Availability Storage, Hosting & Application Delivery",
    "CPU": "Dual Socket P (LGA 3647) support     2nd Gen Intel Xeon Scalable     processors",
    "Chassis": "2U / 1 Node",
    "Drive": "8x Hot-swap 3.5\" SATA3 drive bays",
    "RAM": "16x DDR4 DIMM Slots",
    "Network Ports": "2x 1GbE LAN ports with Intel X722Configure"
},
{
    "name": "SuperMicro SuperServer 1029P-MT/R",
    "price": "\u00a31,870.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-1029p-mt.png",
    "category": "rackmount",
    "Key Features/Applications": "Data Center Optimized, Web Server, Enterprise Server, Managed Hosting, Short Depth",
    "CPU": "Dual Socket P (LGA 3647) support     2nd Gen Intel Xeon Scalable     processors",
    "Chassis": "1U / 1 Node",
    "Drive": "8x Hot-swap 2.5\" SATA3 drive bays,",
    "RAM": "8x DDR4 DIMM Slots",
    "Network Ports": "2x 1GbE LAN ports via Marvell 88E1512Configure"
},
{
    "name": "SuperMicro SuperServer 2029P-C1R(T)",
    "price": "\u00a33,128.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-2029p-c1r.png",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Single Intel Xeon D-2123IT, 4-Core, 8 Threads, 60W",
    "Chassis": "1U / 1 Node",
    "Drive": "1x Internal 3.5\" or 4 Internal 2.5\" drive bays",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE, 2x 10GBase-T, 2x 10G SFP+ and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "SuperMicro SuperServer 5019D-FN8TP",
    "price": "\u00a31,736.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5019d-fn8tp.gif.png",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Intel Xeon processor D-2146NT, 8-Core, 16 Threads, 80W",
    "Chassis": "1U / 1 Node",
    "Drive": "1x Internal 3.5\" or 4 Internal 2.5\" drive bays",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE, 2x 10GBase-T, 2x 10G SFP+ and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "SuperMicro SuperServer 5019S-M(R/T)",
    "price": "\u00a31,027.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/2/6/2629061_bb72b3a74251.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Cloud, Web hosting, File/Print, High flexibility, Communication, Mainstream, Light load VM",
    "CPU": "Single Socket H4 (LGA 1151) supports Intel Xeon processor E3-1200 v6/v5, Intel 7th/6th Gen. Core\u2122 i3 series",
    "Chassis": "1U / 1 Node",
    "Drive": "4x Hot-swap 3.5\" SATA3 bays",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "2x GbE ports with Intel i210-ATConfigure"
},
{
    "name": "SuperMicro SuperStorage 6019P-ACR12L(+)",
    "price": "\u00a33,498.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6019p-acr12l_pullout.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "High Density Storage, Object Storage 1U, Scale-out Storage, Ceph / Hadoop, Big Data Analytics",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen. Intel Xeon Scalable processors",
    "Chassis": "1U / 1 Node",
    "Drive": "12x Hot-swap 3.5\" SAS3/SATA3, 4x Hot-swap 2.5\" 7mm NVMe/SATA drive bays",
    "RAM": "12x DDR4 DIMM Slots",
    "Network Ports": "2x 10GBase-T ports via Intel C622Configure"
},
{
    "name": "SuperMicro SuperStorage SSG-6029P-E1CR(12/16)(L/T)",
    "price": "\u00a33,207.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6029p-e1cr12t.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Corporate Database, Database Processing & Storage, Enterprise Server, HPC, Data Center, iSCSI SAN",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors",
    "Chassis": "2U / 1 Node",
    "Drive": "12x Hot-swap 3.5\" SAS3/SATA3 drive bays including, 4x optional NVMe drives; 2x hot-swap 2.5\" SATA3 drive bays (rear), 2x M.2 NVMe, Expander based backplane",
    "RAM": "16x DDR4 DIMM Slots",
    "Network Ports": "2x 10GBase-T LAN ports with Intel X722 + PHY Intel X557 Configure"
},
{
    "name": "SuperServer 4029GP-TVRT (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-4029gp-tvrt_led.jpg",
    "category": "rackmount",
    "Key Features/Applications": "AI/ML, Deep Learning Training and Inference, Big Data Analytics, High Performance Computing (HPC), Research Laboratory/National Laboratory",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors",
    "Chassis": "4U / 1 Node",
    "Drive": "16x Hot-swap 2.5\" SAS/SATA drives (Optional 8x NVMe drives supported), 2x NVMe based M.2 SSD",
    "RAM": "24x DDR4 DIMM Slots",
    "Network Ports": "Dual 10GBase-T LAN with Intel X540Request Quote"
},
{
    "name": "SuperMicro SuperServer 5019A-12TN4",
    "price": "\u00a31,150.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5019a-12tn4.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Virtual Router , FireWall Applications, Virtualisation, Low Power, Low Cost Applications",
    "CPU": "Intel Atom processor C3850, Single socket FCBGA 1310; TDP 25W TDP 25W",
    "Chassis": "1U / 1 Node",
    "Drive": "1x Internal 3.5\" or 4 Internal 2.5\" drive bays",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE LAN, 1 dedicated IPMI LANConfigure"
},
{
    "name": "SuperMicro SuperServer 5019A-FTN10P",
    "price": "\u00a3916.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5019d-fn8tp_1.png",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Single Intel Xeon D-2123IT, 4-Core, 8 Threads, 60W",
    "Chassis": "1U / 1 Node",
    "Drive": "1x Internal 3.5\" or 4 Internal 2.5\" drive bays",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE, 2x 10GBase-T, 2x 10G SFP+ and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "Supermicro SuperServer 5019P-M(R/T)(TR)",
    "price": "\u00a31,624.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5019p-mr.png",
    "category": "rackmount",
    "Key Features/Applications": "Web Hosting, VM, Compact Network Appliance",
    "CPU": "Single Socket P (LGA 3647) supports 2nd Gen Intel Xeon Scalable processor",
    "Chassis": "1U / 1 Node",
    "Drive": "4x Hot-swap 3.5\" SATA3 bays",
    "RAM": "6x DDR4 DIMM Slots",
    "Network Ports": "2x 1GbE with Marvell 88E1512Configure"
},
{
    "name": "SuperStorage 6029P-E1CR24L (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-6029p-e1cr24h_3b.gif.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Corporate Database, Database Processing & Storage, Enterprise Server, HPC, Data Center, iSCSI SAN",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake)",
    "Chassis": "1U Rackmountable",
    "Drive": "24 Hot-swap 3.5\" SAS3/SATA3 drive bays; 2 hot-swap 2.5\" SATA3 drive bays (rear) Expander based backplane",
    "RAM": "24 DIMMs; up to 6TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
    "Network Ports": "1 RJ45 Dedicated IPMI LAN portRequest Quote"
},
{
    "name": "SuperServer 5019A-FTN4",
    "price": "\u00a3729.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5019a-ftn4.png",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, Edge Computing Server, Virtualization Server",
    "CPU": "Single Intel Atom processor C3758, 8-Core, 16 Threads, 25W",
    "Chassis": "1U / 1 Node",
    "Drive": "1x 3.5\" or 4x 2.5\" internal drive bays",
    "RAM": "4x DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "A+ Server 5019D-FTN4",
    "price": "\u00a31,014.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as-5019d-ftn4.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN and vCPE/uCPE, Software Defined WAN, Embedded IoT Computing, Hyper-Converged Appliance",
    "CPU": "AMD EPYC\u2122 3251 SoC Processor, 8 Core/16 Thread",
    "Chassis": "1U",
    "Drive": "Up to 2x 3.5\" Internal or 4x 2.5\" Internal SATA3 drive bays",
    "RAM": "4 DDR4 DIMM Slots",
    "Network Ports": "4x 1GbE, 1 RJ45 Dedicated IPMI LAN portConfigure"
},
{
    "name": "SuperMicro SuperServer 5019P-WT",
    "price": "\u00a32,958.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5019p-wtr.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "DB Processing & Storage, Data Center Applications, Firewall Applications",
    "CPU": "Single Socket P (LGA 3647) supports 2nd Gen Intel Xeon Scalable processor",
    "Chassis": "1U / 1 Node",
    "Drive": "4x Hot-swap 3.5\" SATA3 drive bays, 1x slim DVD-ROM drive bay",
    "RAM": "6x DDR4 DIMM Slots",
    "Network Ports": "2x 10GBase-T ports with Intel X722 + X557Configure"
},
{
    "name": "SuperServer 6029P-WTRT",
    "price": "\u00a32,869.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-6029p-wtrt.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Web Server, Firewall Apps., Corporate-Wins, DNS, Print, Login, Gateway, provisioning servers, Compact Network Appliance, Cloud Computing",
    "CPU": "Dual Socket P (LGA 3647) support     2nd Gen Intel Xeon Scalable     processors",
    "Chassis": "2U / 1 Node",
    "Drive": "12x Hot-swap 3.5\" SAS/SATA drive     bays (4x NVMe/SAS3/SATA3     hybrid drive bays)",
    "RAM": "12x DDR4 DIMM Slots",
    "Network Ports": "2x 10GBase-T ports via Intel C622Configure"
},
{
    "name": "SuperMicro SuperServer 6019P-WT(R/8)",
    "price": "\u00a32,962.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-6019p-wtr.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Web Server, Firewall Apps., Corporate-Wins, DNS, Print, Login, Gateway, provisioning servers, Compact Network Appliance, Cloud Computing",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake)",
    "Chassis": "1U / 1 Node",
    "Drive": "4x Hot-swap 3.5\" SAS3/SATA3 drive bays with SES2",
    "RAM": "12x DDR4 DIMM Slots",
    "Network Ports": "2x 1GbE LAN ports via Intel C621Configure"
},
{
    "name": "SuperServer 1029UZ-TN20R25M (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-1029uz-tn20r25m.gif.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High Density Enterprise Server, Software Defined Storage",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake)",
    "Chassis": "1U Rackmountable",
    "Drive": "20 Hot-swap 2.5\" 7mm drive bays; up to 20 NVMe (CPU1: 10 NVMe, CPU2: 8 NVMe + 2 NVMe/ SATA/SAS hybrid); 1 M.2 NVMe port, Optional extra M.2 NVMe and SATA3 ports",
    "RAM": "24 DIMMs; up to 6TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
    "Network Ports": "2x 25G SFP28 Ethernet portsRequest Quote"
},
{
    "name": "SuperStorage 5049P-E1CTR36L",
    "price": "\u00a35,956.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-5049p-e1ctr36l.gif_1.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Connectivity/Storage Compute Nodes, Database Processing Appliance Platform",
    "CPU": "Single 2nd Gen Intel Xeon Scalable processor, up to 28 Cores, up to 56 Threads, 70-205W",
    "Chassis": "4U",
    "Drive": "36 Hot-swap 3.5\" SAS/SATA drive bays with SES3 (24 front + 12 rear); 2 Internal fixed bay support up to 4x 2.5\" drive bays (optional) 4 Internal fixed 2.5\" drive bays 2 Hot-swap 2.5\" NVMe/SATA (rear, optional)",
    "RAM": "8 DIMMs; up to 2TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM",
    "Network Ports": "2x 10GBase-T with Intel X557 and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "SuperServer 6019U-TR4T (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-6019u-trtp.gif.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Dual Socket P (LGA 3647) support, 2nd Gen Intel Xeon Scalable, processors (Cascade Lake/Skylake)",
    "Chassis": "1U Rackmountable",
    "Drive": "4 Hot-swap 3.5\" Drive Bays; Optional M.2 NVMe and SATA3 ports",
    "RAM": "24 DIMMs; up to 6TB 3DS ECC DDR4-2933MHz\u2020 RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
    "Network Ports": "4 10GBase-T Ethernet portsRequest Quote"
},
{
    "name": "A+ SuperServer 1014S-WTRT",
    "price": "\u00a32,466.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-1014s-wtrt.png",
    "category": "rackmount",
    "Key Features/Applications": "DB Processing and Storage, Data Center Applications, Firewall Applications",
    "CPU": "Single AMD EPYC\u2122 7003/7002 Series Processor  (The latest AMD EPYC\u2122 7003 Series Processor with AMD 3D V-Cache\u2122 Technology requires BIOS version 2.3 or newer)",
    "Chassis": "1U / 1 Node",
    "Drive": "4x Hot-swap 3.5\" SATA3 drive bays, Optional 4x U.2 NVMe (PCI-E 3.0) drive support via additional kit for NVMe devices",
    "RAM": "8x DDR4 DIMM Slots",
    "Network Ports": "2x 10GBase-T LAN ports via Broadcom BCM57416 ControllerConfigure"
},
{
    "name": "A+ SuperServer 1114S-WTRT",
    "price": "\u00a32,541.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-1114s-wtrt.png",
    "category": "rackmount",
    "Key Features/Applications": "DB Processing and Storage, Data Center Applications, Firewall Applications",
    "CPU": "Single AMD EPYC\u2122 7003/7002 Series Processor  (The latest AMD EPYC\u2122 7003 Series Processor with AMD 3D V-Cache\u2122 Technology requires BIOS version 2.3 or newer)",
    "Chassis": "1U / 1 Node",
    "Drive": "10x Hot-swap 2.5\" SATA3 drive bays, Optional 2 U.2 NVMe (PCI-E 3.0)  drive support via additional kit for  NVMe devices",
    "RAM": "8x DDR4 DIMM Slots",
    "Network Ports": "2x 10GBase-T LAN ports via Broadcom BCM57416 ControllerConfigure"
},
{
    "name": "SuperServer 1029TP-DT(C0/1/R)",
    "price": "\u00a33,230.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-1029tp-dc0r_pullout.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Mission-critical applications, High Availability Storage, Appliance Platform",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake",
    "Chassis": "1U / 2 Node",
    "Drive": "4x Hot-swap 2.5\" SATA3 drive bays",
    "RAM": "16x DDR4 DIMM Slots per node",
    "Network Ports": "Flexible Networking support via SIOM; Dedicated IPMI 2.0 LANConfigure"
},
{
    "name": "SuperServer 6029TP-HTR",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/o/i/oip_27_.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Compute Intensive Application, HPC, Data Center, Enterprise Server, Financial Analysis, Mission-critical applicationsCPU (Per Node):Dual 2nd Gen Intel Xeon Scalable     processors Chassis: 2U / 4 NodesDrives (Per Node):3 Hot-swap 3.5\" SATA3 HDD traysRAM (Per Node):16 DIMMs; up to 4TB 3DS ECC     DDR4-2933MHz\u2020 RDIMM/LRDIMM,Network Ports (Per Node):Flexible Networking support via SIOM;     Dedicated IPMI 2.0 LANRequest Quote",
    "CPU": "N/A",
    "Chassis": "2U / 4 NodesDrives (Per Node):3 Hot-swap 3.5\" SATA3 HDD traysRAM (Per Node):16 DIMMs; up to 4TB 3DS ECC     DDR4-2933MHz\u2020 RDIMM/LRDIMM,Network Ports (Per Node):Flexible Networking support via SIOM;     Dedicated IPMI 2.0 LANRequest Quote",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "A+ Server 2014TP-HTR",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-2014tp-htr_pullout.png",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Single AMD EPYC\u2122 7003/7002 Series Processor, Up to 64-Cores, up to 128 Threads, Max. 280W",
    "Chassis": "2U / 4 Nodes",
    "Drive": "3 Hot-swap 3.5\" SATA3 drive bays per node",
    "RAM": "8 DDR4 DIMM Slots",
    "Network Ports": "Provided via SIOM (optional), 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "SuperServer 5029P-WTR",
    "price": "\u00a32,374.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5029p-wtr.gif.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "DB Processing & Storage, Connectivity/Storage Computer Nodes, Data Warehouse",
    "CPU": "Single 2nd Gen Intel Xeon Scalable processor , up to 28 Cores, up to 56 Threads, 70-205W",
    "Chassis": "2U",
    "Drive": "8 Hot-swap 3.5\" SATA3 drive bays",
    "RAM": "6 DIMMs; up to 1.5TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM",
    "Network Ports": "2x 10GBase-T ports with Intel X722 + X557 and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "SuperServer 5039MC-H12TRF",
    "price": "\u00a37,777.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-5039msh12trf_pullout_wnodesontop_1.png",
    "category": "rackmount",
    "Key Features/Applications": "Cloud Computing, Web Cache, Web Hosting, VM, Social Networking, Corporate-WINS, DNS, Print, Login",
    "CPU": "Single socket H4 (LGA 1151) supports Intel Xeon processor E-2100/E-2200, 8th Gen. Intel Core\u2122 i3 Processors, Intel Celeron, Intel Pentium",
    "Chassis": "3U / 12 Node",
    "Drive": "2x 3.5\" SATA3 drives or 4x 2.5\" SATA3 drives or 2x 2.5\" NVMe + 2x 2.5\" SATA3 drives or 2x 2.5\" NVMe + 1x 3.5\" SATA3 drive",
    "RAM": "Up to 128GB unbuffered VLP ECC, up to DDR4-2666MHz; 4 DIMM slots",
    "Network Ports": "2 GbE LAN ports via Intel i350Request Quote"
},
{
    "name": "ASRock Rack 1U2LW-X570",
    "price": "\u00a3751.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/u/1u2lw-x5702l2t-1_l_.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Supports AMD Ryzen 5000 Series Desktop Processors",
    "Chassis": "1U Rackmountable",
    "Drive": "2 fixed 3.5\" SATA drive bays or 1 fixed 3.5\" and 1 fixed 2.5\" SATA drive bays",
    "RAM": "4 DDR4 ECC/ non-ECC UDIMM, up to 32GB each",
    "Network Ports": "On-board dual 10GbE RJ45 and dual 1GbE RJ45Starting from:  \u00a3626.00 Configure"
},
{
    "name": "ASRock Rack 1U4LW-X570",
    "price": "\u00a3866.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/u/1u4lw-x5702l2t-2l.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Supports AMD Ryzen 5000 Series Desktop Processors",
    "Chassis": "1U Rackmountable",
    "Drive": "4 Hot-swap 3.5\" HDD/SSD bays, 3 fixed 2.5\" HDD/SSD bays",
    "RAM": "4 DDR4 ECC/ non-ECC UDIMM, up to 32GB each",
    "Network Ports": "4 Hot-swap 3.5\" HDD/SSD bays, 3 fixed 2.5\" HDD/SSD baysStarting from:  \u00a3722.00 Configure"
},
{
    "name": "ASRock Rack 1U4LW-X570/2L2T",
    "price": "\u00a3969.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/u/1u4lw-x5702l2t-2l.jpg_1.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Supports AMD Ryzen 5000 Series Desktop Processors",
    "Chassis": "1U Rackmountable",
    "Drive": "4 Hot-swap 3.5'' HDD/SSD bays, 3 fixed 2.5\" HDD/SSD bays",
    "RAM": "4 DDR4 ECC/ non-ECC UDIMM, up to 32GB each",
    "Network Ports": "2 RJ45 (10GbE) by Intel X550-AT2, 2 RJ45 (1GbE) by Intel i210Starting from:  \u00a3808 Configure"
},
{
    "name": "ASRock Rack 1U4LW-B650/2L2T",
    "price": "\u00a31,020.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/4/1/41yhf_m545l._ac_sl1200_.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Single Socket AM5 (LGA 1718), supports AMD EPYC\u2122 4004 and AMD Ryzen\u2122 9000/8000/7000 Series Processors",
    "Chassis": "1U Rackmountable",
    "Drive": "4 hot-swap 3.5\" SATA drive bays",
    "RAM": "4 DIMM slots (2DPC), supports DDR5 ECC/non-ECC UDIMM",
    "Network Ports": "2 RJ45 (10GbE) by Broadcom BCM57416, 2 RJ45 (1GbE) by Intel i210Starting from:  \u00a3850.00 Configure"
},
{
    "name": "ASRock Rack 1U4LW-B650/2L2T RPSU",
    "price": "\u00a31,789.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/u/1u4lw-b6502l2t_rpsu-1_m_.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Single Socket AM5 (LGA 1718), supports AMD Ryzen 7000 series processors",
    "Chassis": "1U",
    "Drive": "4x External Hot-swap 3.5\" SATA drive bays, Internal 1 M-key (PCIe5.0 x4), supports 2280/2242 form factor [CPU]",
    "RAM": "4 DIMM slots (2DPC), supports DDR5 ECC/non-ECC UDIMM",
    "Network Ports": "4x 1GbE, 2x 10GBase-T, 2x 10G SFP+ and 1 dedicated LAN for IPMI 2.0Configure"
},
{
    "name": "ASRock Rack 1U4LW-X570/2L2T RPSU",
    "price": "\u00a31,197.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/u/1u4lw-x5702l2t_rpsu-1_l_.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Supports AMD Ryzen 5000 Series Desktop Processors",
    "Chassis": "1U Rackmountable",
    "Drive": "4 Hot-swap 3.5'' HDD/SSD bays, 3 fixed 2.5\" HDD/SSD bays",
    "RAM": "4 DDR4 ECC/ non-ECC UDIMM, up to 32GB each",
    "Network Ports": "2 RJ45 (10GbE) by Intel X550-AT2, 2 RJ45 (1GbE) by Intel i210Starting from:  \u00a3998.00 Configure"
},
{
    "name": "ASUS RS500A-E11-RS12U",
    "price": "\u00a31,926.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/b/7/b7a38d9f-693e-4e7f-878d-19ae35091104.png",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "1 x Socket SP3 (LGA 4094) AMD EPYC\u2122 7002/7003 Series, 3rd Gen AMD EPYC\u2122 processors with AMD 3D V-Cache\u2122 technology",
    "Chassis": "1U Rackmountable",
    "Drive": "12 x 2.5\" Hot-swap Storage Bays (Backplane Supports 12 x SATA/SAS/NVMe Devices), Internal: (optional) 4 x 2.5\" Easy-swap Storage Bays (Backplane Supports 4 x SATA/NVMe Devices), 2 x M.2 connectors",
    "RAM": "16 (8-channel, 2DPC) Max. 4,096GB DDR4 3200 RDIMM / LRDIMM / LRDIMM 3DS/p>",
    "Network Ports": "2 x 1GbE LAN ports (RJ45, Intel I350-AM2)Starting from:  \u00a31,605.00 Configure"
},
{
    "name": "ASRock Rack 1U8S4E-EGS/2T (COMING SOON)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/1/u/1u8s4e-egs2t-3_m_.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Single Socket E (LGA 4677), supports 4th Gen Intel Xeon Scalable processors",
    "Chassis": "1U",
    "Drive": "4 Hot-swap 2.5\" NVMe (PCIe5.0 x4)/SATA/SAS* drive bays, 4 Hot-swap 3.5\" SATA drive bays",
    "RAM": "8 DIMM slots (1DPC), supports DDR5 RDIMM/ RDIMM-3DS",
    "Network Ports": "2 RJ45 (10GbE) by Intel X550Coming Soon Contact us for more information Request Quote"
},
{
    "name": "ASRock Rack 4U18N-AM5/2T",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/4/u/4u18n-am52t-1_m_.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Supports AMD Ryzen\u21227000 series Processors (65W)",
    "Chassis": "4U / 18 Nodes Drives (Per Node):Supports 2 x 2.5\" NVMe SSD per node, 1 M-key (PCIe5.0 x4), supports 2280 form factor [CPU]RAM (Per Node):4 DDR5 ECC/ non-ECC UDIMM, up to 32GB eachNetwork Ports (Per Node):Integrated IPMI 2.0 and KVM with Dedicated LAN Request Quote",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "ASRock Rack 4U8G-GENOA2 (COMING SOON)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/4/u/4u8g-genoa2-1_m_.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Dual Socket SP5 (LGA 6096), supports AMD EPYC\u2122 9004 (with AMD 3D V-Cache\u2122 Technology) and 97x4 series processors",
    "Chassis": "1U",
    "Drive": "4 hot-swap 2.5\" NVMe (PCIe5.0 x4) drive bays",
    "RAM": "12+12 DIMM slots (1DPC), supports DDR5 RDIMM, RDIMM-3DS",
    "Network Ports": "2 RJ45 (1GbE) by Intel i350Coming Soon Contact us for more information Request Quote"
},
{
    "name": "Lenovo ThinkSystem SR630 7X02",
    "price": "\u00a32,487.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/6/1/6115ee44-10bc-4155-b530-8f04808b7b97.jpg",
    "category": "rackmount",
    "Key Features/Applications": "N/A",
    "CPU": "N/A",
    "Chassis": "N/A",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "Lenovo ThinkSystem SR630 7X02",
    "price": "\u00a32,583.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/6/1/6115ee44-10bc-4155-b530-8f04808b7b97-2_1.jpg",
    "category": "rackmount",
    "Key Features/Applications": "N/A",
    "CPU": "N/A",
    "Chassis": "N/A",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "Lenovo ThinkSystem SR630 V2 7Z71",
    "price": "\u00a35,194.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/2/a/2ab35beb-2dc0-4c47-a2b2-5c1d4d7f1e6e.jpg",
    "category": "rackmount",
    "Key Features/Applications": "N/A",
    "CPU": "N/A",
    "Chassis": "N/A",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "Lenovo ThinkSystem SR650 7X06",
    "price": "\u00a35,194.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/6/d/6d31712c-1ce8-47fe-98dc-31ba39ecb78b.jpg",
    "category": "rackmount",
    "Key Features/Applications": "N/A",
    "CPU": "N/A",
    "Chassis": "N/A",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "Lenovo ThinkSystem SR650 7X060PSEA",
    "price": "\u00a32,652.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/6/d/6d31712c-1ce8-47fe-98dc-31ba39ecb78b_1.jpg",
    "category": "rackmount",
    "Key Features/Applications": "N/A",
    "CPU": "N/A",
    "Chassis": "N/A",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "Lenovo ThinkSystem SR650 V2 7Z73",
    "price": "\u00a32,588.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/6/d/6d31712c-1ce8-47fe-98dc-31ba39ecb78b_2.jpg",
    "category": "rackmount",
    "Key Features/Applications": "N/A",
    "CPU": "N/A",
    "Chassis": "N/A",
    "Drive": "N/A",
    "RAM": "N/A",
    "Network Ports": "N/A"
},
{
    "name": "Microcloud A+ Server AS -3015MR-H8TNR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-3015mr-h8tnr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Cloud Computing, Web Cache, CDN, Video Streaming, Corporate - WINS, DNS, Print, Login, Web/Collocation Services, Social Networking, Downloads",
    "CPU": "8 sets of AMD EPYC\u2122 4004 Series Processor",
    "Chassis": "3U / 8 Nodes",
    "Drive": "8 set of 2x Front NVMe U.2/ SAS/ SATA3 drives w/ optional kits",
    "RAM": "8 set of Up to 128GB ECC/non ECC UDIMM; DDR5 5200MHz, in 4 DIMM sockets",
    "Network Ports": "Dual 1GbE/10GbE/25GbE LAN via AoC, 1+1 Dedicated and Centralised IPMI Management LAN portRequest QuoteCheck out our blog about AS-3015MR-H8TNR"
},
{
    "name": "Microcloud SuperServer SYS-530MT-H8TNR",
    "price": "\u00a35,701.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-530mt-h8tnr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Cloud Computing, Web Hosting, VM, Online Game Server Hosting, IT Infrastructure, Web Cache, Social Networking",
    "CPU": "8 set of Intel Xeon E-2300 series and Pentium processor",
    "Chassis": "3U / 8 Node Rackmountable",
    "Drive": "8 set of 2x Front Hot-swappable 3.5\" SATA3 HDD or Hybrid 2x 2.5\" SAS/SATA3/NVMe U.2 drives w/ option kits",
    "RAM": "8 set of Up to 128GB ECC/non ECC UDIMM; DDR4 3200MHz, in 4 DIMM sockets",
    "Network Ports": "8 set of Dual 1GbE LAN PortsStarting from:  \u00a34,751.00 Configure"
},
{
    "name": "Ultra SuperServer SYS-120U-TNR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/h/q/hqdefault.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server, HPC, Software Defined Storage, Application Tier Service Provider, 5G/Telco",
    "CPU": "Dual Socket P+ (LGA-4189) 3rd Gen Intel Xeon Scalable Processors",
    "Chassis": "1U",
    "Drive": "12x2.5\" hot-swap hybrid NVMe/SATA/SAS drive bays",
    "RAM": "Memory Capacity: 32 DIMM slots, Up to 8TB: 32x 256 GB DRAM, Up to 12TB: 16x 512 GB PMem and 16x 256 GB DRAM, Memory Type: 3200/2933/2666MHz ECC DDR4 RDIMM;LRDIMM, Intel Optane\u2122 persistent memory 200 series",
    "Network Ports": "FlexibleRequest Quote"
},
{
    "name": "Supermicro Mainstream A+ Server AS-1015A-MT",
    "price": "\u00a31,006.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-1015a-mt_callout_angle.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Web/Hosting Application, Email/Firewall/Application Server, Designed for small and medium businesses",
    "CPU": "Single AMD EPYC\u2122 4004 Series Processor up to 170W TDP",
    "Chassis": "1U Rackmountable",
    "Drive": "Default: 1 internal fixed 3.5\" SATA drive bay. Option A: 4 internal fixed 2.5\" SATA* drive bays",
    "RAM": "4x DDR5 UDIMM Slots, ECC/Non-ECC DDR5-5200 Up to total 192GB",
    "Network Ports": "IPMI 2.0 + KVM with Dedicated LAN (1GbE), 2x 1GbE LAN (Intel I210-AT)Starting from:  \u00a3839.00 Configure"
},
{
    "name": "Supermicro AS -1124US-TNRP (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-1124us-tnrp.gif-4.png",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Dual AMD EPYC\u2122 7003/7002 Series Processors",
    "Chassis": "1U",
    "Drive": "12 Hot-swap 2.5\" U.2 NVMe drive bays or SATA3/SAS3 (via optional SAS kit)",
    "RAM": "32x DDR4 DIMM Slots",
    "Network Ports": "Dual-port 10GBase-T and Dual-port 10G SFP+ via Intel X710-TM4Request QuoteCheck out our blog about AS -1124US-TNRP"
},
{
    "name": "Asus RS700-E11-RS12U",
    "price": "\u00a35,737.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/9/2/92537004-fdab-44e3-a4e5-50e29366da10-2_1.png",
    "category": "rackmount",
    "Key Features/Applications": "Powerful performance, Scale-up storage and expansion design, Flexible networking module design, IoT Edge Computing, Advanced air cooling solution, Enhanced IT-infrastructure management, Ready for AI and HPC workloads",
    "CPU": "Dual Socket 4th Generation Intel Xeon Processor Scalable Family",
    "Chassis": "1U",
    "Drive": "12x2.5\u201d NVMe/SATA/SAS* hot-swap bay",
    "RAM": "32 x DDR5 4800(1DPC)/4400(2DPC)",
    "Network Ports": "4 x1Gbe(Intel I350-AM4) RJ45 port or 2 x 10Gbe(Intel X710-AT2) RJ45 portStarting from:  \u00a33,064.00 Configure"
},
{
    "name": "Supermicro SuperServer F619P2-RC1",
    "price": "\u00a312,678.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-f619p2-rt_pull_out.gif.jpeg",
    "category": "rackmount",
    "Key Features/Applications": "Network Security Appliance, SD-WAN, vCPE controller box, IoT Edge Computing",
    "CPU": "Dual Socket P (LGA 3647) support 2nd Gen Intel Xeon Scalable processors (Cascade Lake/Skylake)",
    "Chassis": "4U / 8 Nodes",
    "Drive": "6 Hot-swap 2.5\" SAS3/SATA3 or 2 Hot-swap 2.5\" SAS3/SATA3 + 4 optional NVMe U.2",
    "RAM": "12 DIMM slots, Up to 3TB 3DS ECC DDR4-2933MHz RDIMM/LRDIMM, Supports Intel Optane\u2122 DCPMM",
    "Network Ports": "Flexible networking via SIOM ,Support for Intelligent Platform Management Interface v.2.0, IPMI 2.0 with virtual media over LAN and KVM-over-LAN supportStarting from:  \u00a310,565.00 Configure/Request Quote"
},
{
    "name": "Supermicro MegaDC ARS-110M-NR (Complete System Only )",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/r/ars-110m-nr_callout_angle.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Server, Hyperscale Data Center, Front End Server, Infrastructure",
    "CPU": "Dual AMD EPYC\u2122 7003/7002 Series Processors",
    "Chassis": "1U Rackmount",
    "Drive": "10x 2.5\" U.2 NVMe Hot-Swap Drive Bays",
    "RAM": "16 DIMMs; Up to 4TB ECC Registered DDR4-3200MHz RDIMM/LRDIMM",
    "Network Ports": "Request Quote"
},
{
    "name": "Supermicro GPU ARS-121L-DNR (Complete System Only )",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/r/ars-121l-dnr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High Performance Computing, Hyperscale Cloud Applications, Data Analytics",
    "CPU": "NVIDIA Grace\u2122 CPU Superchip (144-core per node)",
    "Chassis": "1U / 2 Node Rackmount",
    "Drive": "Up to 4x Hot-swap E1.S drives and 2x M.2 NVMe drives per node",
    "RAM": "Up to 480GB LPDDR5X onboard memory",
    "Network Ports": "1 RJ45 1GbE (Dedicated IPMI port)Request Quote"
},
{
    "name": "UP SuperServer SYS-111R-M",
    "price": "\u00a31,212.00",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-111r-m_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Web/Hosting Application, Database Processing and Storage, Encoding Decoding",
    "CPU": "Single Socket V0 (LGA-1700) supports Intel  Xeon E-2400 series, Intel  Pentium processors",
    "Chassis": "1U",
    "Drive": "8 front hot-swap 2.5\" SAS*/SATA drive bays",
    "RAM": "4 DIMMs; Up to 128GB of DDR5 ECC UDIMM memory with speeds of up to 4400MHz",
    "Network Ports": "Intel Ethernet Controller i210 2x 1GbE RJ45Starting from:  \u00a31,010.00 Configure"
},
{
    "name": "Supermicro Storage SuperServer SSG-641E-E1CR24H New",
    "price": "\u00a33,997.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-641e-e1cr24h_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
    "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
    "Chassis": "4U Rackmount",
    "Drive": "24x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
    "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
    "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
},
{
    "name": "Supermicro Storage SuperServer SSG-641E-E1CR36H New",
    "price": "\u00a34,778.40",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-641e-e1cr36h_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
    "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
    "Chassis": "4U Rackmount",
    "Drive": "36x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
    "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
    "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
},
{
    "name": "Supermicro Storage SuperServer SSG-631E-E1CR16H New",
    "price": "\u00a33,853.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-631e-e1cr16h_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
    "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
    "Chassis": "3U Rackmount",
    "Drive": "16x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
    "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
    "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
},
{
    "name": "Storage SuperServer SSG-621E-ACR12H New",
    "price": "\u00a33,273.60",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-621e-acr12h_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
    "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
    "Chassis": "2U Rackmountable",
    "Drive": "12x 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Rear 2.5\" SATA Slots, 2x NVMe M.2 (form factor: 2280 and 22110)",
    "RAM": "Up to 4TB 3DS ECC RDIMM, DDR5-5600MT/s(1DPC) in 16 DIMM slots",
    "Network Ports": "2x 10 GbE onboard via Broadcom BCM57416, 1x GbE Dedicated LAN for server remote management: IPMI 2.0 / KVM over LAN / Media over LANRequest Quote"
},
{
    "name": "Storage SuperServer SSG-521E-E1CR24H (Complete System Only ) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-521e-e1cr24h_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
    "CPU": "Single Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processor. Up to 300W TDP.",
    "Chassis": "2U Rackmount",
    "Drive": "24 3.5\" Hot-swap SAS3/SATA3 drives, 2x Rear SATA Slots, 4x Optional Rear NVMe Slots, 2x NVMe/SATA M.2 (form factor: 2280)",
    "RAM": "16 ECC DDR5-5600: LRDIMM/RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s)Request Quote"
},
{
    "name": "Storage A+ Server ASG-2015S-E1CR24H (Complete System Only ) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/asg-2015s-e1cr24h_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Server, iSCSI SANHPC, Data Center, Database Processing & Storage, Corporate Database, Appliance Optimized Storage Building Blocks",
    "CPU": "Single Socket SP5 4th Generation AMD EPYC\u2122 9004 Scalable Processors. Up to 290W TDP",
    "Chassis": "2U Rackmount",
    "Drive": "24 3.5\" Hot-swap SAS3/SATA3 drives, 2x Rear SATA Slots, 4x Optional Rear NVMe Slots, 2x NVMe M.2 (form factor: 2280/22110)",
    "RAM": "12 ECC DDR5-4800: LRDIMM/RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s) / AIOMRequest Quote"
},
{
    "name": "Supermicro Storage SuperServer SSG-640SP-E1CR60 (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/s/ssg-640sp-e1cr60_callout_rear.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Big Data & Analytics, Data Lake, HPC and AI/ML WorkloadsTelco & Cloud Service Providers, Financial Services & Healthcare Image Archives, Content Repositories, Government Data Protection",
    "CPU": "Dual socket 3rd Gen Intel Xeon Scalable processors, up to 72 Cores",
    "Chassis": "4U Rackmount",
    "Drive": "60 3.5\"/2.5\" Hot-swap SAS3/SATA3 drives, 2x Fixed slim SATA SSD, 2x NVMe M.2 (form factor: 2280 and 22110)",
    "RAM": "16 ECC DDR4-3200: LRDIMM/RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s), 2 RJ45 10 GBASE-T LAN port(s)Request Quote"
},
{
    "name": "Microcloud SuperServer SYS-531MC-H8TNR New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-531mc-h8tnr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Cloud Computing, Web Hosting, VM, Online Game Server Hosting, IT Infrastructure, Web Cache, Social Networking",
    "CPU": "Intel Xeon E-2400/Pentium* Processor Single Socket LGA-1700 (Socket V0) supported, CPU TDP supports Up to 95W TDP *Pentium G7400 and G7400T",
    "Chassis": "3U / 8 Node",
    "Drive": "8 set of 2x Front Hot-swappable 3.5\" SATA3 HDD or Hybrid 2x 2.5\" SAS/SATA3/NVMe U.2 drives w/ option kits",
    "RAM": "8 set of Up to 128GB ECC UDIMM; DDR5 4400MHz, in 4 DIMM sockets",
    "Network Ports": "AIOMRequest Quote"
},
{
    "name": "IoT SuperServer SYS-111AD-WRN2 New",
    "price": "\u00a31,108.80",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-111ad-wrn2_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Firewall Applications, Edge/Cloud Computing Services, CDN/vCDN/Cloud CDN, vRAN/o-RAN",
    "CPU": "Intel 14th/13th/12th Gen Core i9/i7/i5/i3 (ADL/RPL-S) Processor in LGA1700 Socket with R680E Chipset",
    "Chassis": "1U Rackmount",
    "Drive": "2 internal fixed 2.5\" NVMe/SAS/SATA drive bay(s)",
    "RAM": "4 DIMM slots, DDR5-4400MHz memory, support up to 128GB",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s), 2 RJ45 2.5 GbE LAN port(s) (Intel I226)Starting from:  \u00a3924.00 Configure"
},
{
    "name": "Supermicro Mainstream A+ Server AS -2015A-TR",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-2015a-tr_callout_angle.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Designed for financial companies, AMD Xilinx Solarflare X2 and X3 Ethernet adapters validated",
    "CPU": "AMD EPYC\u2122 4004 Series LGA1718 up to 170W TDP Processors",
    "Chassis": "2U Rackmount",
    "Drive": "8 front hot-swap 3.5\" SAS/SATA drive bay(s)",
    "RAM": "4 DDR5-5200 UDIMM ECC/Non-ECC slots supporting up to 192GB memory",
    "Network Ports": "IPMI 2.0 + KVM with Dedicated LAN (1GbE), Dual 1GbE LAN (Intel I210-AT)Starting from:  \u00a31,324.00 Configure"
},
{
    "name": "Supermicro GPU ARS-111GL-DNHR-LCC (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/r/ars-111gl-dnhr-lcc_main.jpg-2.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High Performance Computing, AI/Deep Learning Training and Inference, Large Language Model (LLM) and Generative AI",
    "CPU": "NVIDIA 72-core NVIDIA Grace CPU on GH200 Grace Hopper\u2122 Superchip",
    "Chassis": "1U Rackmount Liquid Cooling",
    "Drive": "4 front hot-swap E1.S NVMe drive bay(s)",
    "RAM": "Slot Count: Onboard Memory, Max Memory: Up to 480GB ECC LPDDR5X, Additional GPU Memory: Up to 96GB ECC HBM3",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s)Request Quote"
},
{
    "name": "Supermicro GPU ARS-111GL-NHR-LCC (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/r/ars-111gl-nhr-lcc_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High Performance Computing, AI/Deep Learning Training and Inference, Large Language Model (LLM) and Generative AI",
    "CPU": "NVIDIA 72-core NVIDIA Grace CPU on GH200 Grace Hopper\u2122 Superchip",
    "Chassis": "1U Rackmount Liquid Cooling",
    "Drive": "8 front hot-swap E1.S NVMe drive bay(s)",
    "RAM": "Slot Count: Onboard Memory, Max Memory: Up to 480GB ECC LPDDR5X, Additional GPU Memory: Up to 96GB ECC HBM3",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s)Request Quote"
},
{
    "name": "Supermicro GPU A+ Server AS -2145GH-TNMR-LCC (Complete System Only ) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-2145gh-tnmr-lcc_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Artificial Intelligence (AI), Large Language Model (LLM), Cloud Solution Provider (CSP), High Performance Comptue (HPC), Research Lab",
    "CPU": "Quad AMD Instinct\u2122 MI300A processors",
    "Chassis": "2U Rackmount Liquid Cooling",
    "Drive": "Default 8 hot-swap 2.5\" NVMe dirve bays or Optional 8 hot-swap 2.5\" SAS3/SATA3 drive bays via storage add-on card, 2 Internal NVMe/SATA M.2 slots",
    "RAM": "Slot Count: Onboard Memory, Max Memory: Up to 512GB ECC HBM3",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s)Request Quote"
},
{
    "name": "Supermicro GPU SuperServer SYS-221GE-TNHT-LCC (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-221ge-tnht-lcc_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High Performance Computing, AI/Deep Learning Training, Industrial Automation, Retail, Healthcare, Conversational AIBusiness Intelligence & AnalyticsDrug Discovery, Climate and Weather Modeling, Finance & Economics",
    "CPU": "Dual 5th/4th Gen Intel Xeon Scalable processor support",
    "Chassis": "2U Rackmount Liquid Cooling",
    "Drive": "2 M.2 NVMe for boot drive only, 4x 2.5\" Hot-swap NVMe/SATA3 drive bays",
    "RAM": "32 DIMM slots Up to 8TB: 32x 256 GB DRAM Memory Type: 5600MTs ECC DDR5",
    "Network Ports": "Flexible networking optionsRequest Quote"
},
{
    "name": "Supermicro GPU SuperServer SYS-421GE-TNHR2-LCC (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-421ge-tnhr2-lcc_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High Performance Computing, AI/Deep Learning Training, Industrial Automation, Retail, Healthcare, Conversational AIBusiness Intelligence & Analytics, Drug Discovery, Climate and Weather Modeling, Finance & Economics",
    "CPU": "5th/4th Gen Intel  Xeon Scalable processor support",
    "Chassis": "4U Rackmount Liquid Cooling",
    "Drive": "8 front hot-swap 2.5\" NVMe drive bay(s), 2 M.2 NVMe slot(s) (M-key)",
    "RAM": "32 DIMM slots Up to 8TB: 32x 256 GB DRAM Memory Type: 5600MTs ECC DDR5",
    "Network Ports": "2 SFP28 25GbE with Broadcom BCM57414 (optional), 2 RJ45 10GbE with Intel X710-AT2 (optional)Request Quote"
},
{
    "name": "Supermicro GPU A+ Server AS -4125GS-TNHR2-LCC (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-4125gs-tnhr2-lcc_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Artificial Intelligence (AI), HPC, AI / Deep Learning, Deep Learning/AI/Machine Learning Development",
    "CPU": "Dual-Socket, AMD EPYC\u2122 9004 Series Processors",
    "Chassis": "4U Rackmount Liquid Cooling",
    "Drive": "Default: Total 8 bay(s) / 8 front hot-swap 2.5\" NVMe drive bay(s)",
    "RAM": "24 DIMM slots Up to 6TB: 4800 ECC DDR5",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s)Request Quote"
},
{
    "name": "Supermicro GPU SuperServer SYS-421GU-TNXR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-421gu-tnxr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High Performance Computing, AI/Deep Learning Training, Large Language Model (LLM) Natural Language Processing",
    "CPU": "Dual Socket E (LGA-4677), 5th Gen Intel Xeon / 4th Gen Intel Xeon Scalable processors",
    "Chassis": "4U Rackmount Liquid Cooling",
    "Drive": "6 front hot-swap 2.5\" NVMe/SATA drive bay(s)",
    "RAM": "Slot Count: 32 DIMM slots Max Memory (2DPC): Up to 8TB 5600MT/s ECC DDR5",
    "Network Ports": "2 RJ45 10GbE with Intel X710-AT2Request Quote"
},
{
    "name": "Supermicro GPU SuperServer SYS-421GE-TNRT (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-421ge-tnrt_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High Performance Computing, VDI, AI/Deep Learning Training, Media/Video Streaming, Cloud Gaming, Animation and Modeling, Design & Visualization, 3D Rendering, Diagnostic Imaging",
    "CPU": "Dual Socket E (LGA-4677) 5th Gen Intel Xeon / 4th Gen Intel Xeon Scalable processors",
    "Chassis": "4U Rackmount Liquid Cooling",
    "Drive": "8x HOT SWAP 2.5\u201d SATA/SAS (AOC required), 8x 2.5\" Hot-swap  SATA drive bays, 8x2.5\" Hot-swap  NVMe drive bays",
    "RAM": "Slot Count: 32 DIMM slots, Max Memory (1DPC): Up to 4TB 5600MT/s ECC RDIMM, Max Memory (2DPC): Up to 8TB 4400MT/s ECC DDR5 RDIMM",
    "Network Ports": "2 RJ45 10GbE with Intel X710-AT2Request Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-221BT-HNTR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-221bt-hntr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "All-Flash NVMe Hyperconverged Infrastructure, Container-as-a-Service; Application Accelerator, High-Performance File System, Diskless HPC Clusters",
    "CPU": "Dual Socket E (LGA 4677) support 5th/4th Gen Intel Xeon Scalable processors per node",
    "Chassis": "2U Rackmount",
    "Drive": "Default: Total 6 bay(s) 2 front hot-swap 2.5\" PCIe 5.0 NVMe/SATA drive bay(s) 4 front hot-swap 2.5\" PCIe 4.0 NVMe/SATA drive bay(s) per node",
    "RAM": "16 DIMM Slots supporting up to 4TB of memory; ECC RDIMMs up to DDR5-5600 per node",
    "Network Ports": "AIOMRequesting Quote:Please provide full specification including Processor, Memory, Storage, AIOM, AOC, TPM and any other requirements such as RAIDRequest Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-221BT-DNTR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-221bt-dntr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High-Performance File System, Diskless HPC Clusters, Scale Out All-Flash NVMe Storage, Big Data Analytics and AI",
    "CPU": "Socket E (LGA 4677) support 5th/4th Gen Intel Xeon Scalable processors per node",
    "Chassis": "2U Rackmount",
    "Drive": "Default: Total 12 bay(s) 2 front hot-swap 2.5\" PCIe 5.0 NVMe/SATA drive bay(s) 10 front hot-swap 2.5\" PCIe 4.0 NVMe/SATA drive bay(s) per node",
    "RAM": "16 DIMM Slots supporting up to 4TB of memory; ECC RDIMMs up to DDR5-5600 per node",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s) per nodeRequest Quote"
},
{
    "name": "Supermicro Hyper SuperServer SYS-221H-TNR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-221h-tnr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Software-defined Storage, AI Inference and Machine Learning, Cloud Computing, Enterprise Server",
    "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
    "Chassis": "2U Rackmount",
    "Drive": "8x 2.5\" hot-swap NVMe/SATA/SAS drive bays; Optional 8x 2.5\" hot-swap NVMe/SAS/SATA drive bays; 2x internal M.2 NVMe/SATA drive slots; Optional RAID support via storage add-on card",
    "RAM": "Slot Count: 32 DIMM slots Max Memory (1DPC): Up to 4TB 5600MT/s ECC DDR5 RDIMM / Max Memory (2DPC): Up to 8TB 4400MT/s ECC DDR5 RDIMM",
    "Network Ports": "Flexible networking options with up to 2 AIOM networking slots (OCP NIC 3.0 compatible)Request Quote"
},
{
    "name": "Supermicro Hyper SuperServer SYS-121H-TNR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-121h-tnr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Software-defined Storage, AI Inference and Machine Learning, Cloud Computing, Enterprise Server",
    "CPU": "Dual Socket E (LGA-4677) 5th/4th Gen Intel Xeon Scalable processors",
    "Chassis": "1U Rackmount",
    "Drive": "8x 2.5\" hot-swap NVMe/SATA/SAS drive bays; Optional 4x 2.5\" hot-swap NVMe/SAS/SATA drive bays; 2x internal M.2 NVMe/SATA drive slots; Optional RAID support via storage add-on card",
    "RAM": "Slot Count: 32 DIMM slots Max Memory (1DPC): Up to 4TB 5600MT/s ECC DDR5 RDIMM. / Max Memory (2DPC): Up to 8TB 4400MT/s ECC DDR5 RDIMM",
    "Network Ports": "Flexible networking options with 1 AIOM networking slot (OCP NIC 3.0 compatible)Request Quote"
},
{
    "name": "Supermicro Hyper A+ Server AS -2125HS-TNR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/a/s/as_-2125hs-tnr_main.jpg.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Software-defined Storage, AI Inference and Machine Learning, Cloud Computing, Enterprise Server",
    "CPU": "Dual 4th Generation AMD EPYC\u2122 9004 Series Processors",
    "Chassis": "2U",
    "Drive": "Default: Total 24 front fixed 2.5\" NVMe*/SAS*/SATA* drive bay(s) (*NVMe/SAS/SATA support may require additional storage controller and/or cables, please see the optional parts list for details)",
    "RAM": "24 DIMM slots Max Memory (1DPC): Up to 6TB 4800MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated IPMI LAN port(s)Request Quote"
},
{
    "name": "UP SuperServer SYS-521E-WR (Complete System Only)",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-521e-wr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Data Center Optimized, Network Appliance, Database/Storage, Entry GPU server",
    "CPU": "Single Socket E (LGA-4677) 4th/5th Gen Intel  Xeon Scalable processors. Up to 300W TDP",
    "Chassis": "2U Rackmountbale",
    "Drive": "Default: Total 8 bays: 4 front hot-swap 3.5\" SAS*/SATA drive bays, 4 front hot-swap 3.5\" PCIe 5.0 NVMe*/SAS*/SATA drive bays",
    "RAM": "8 DIMMs; Supports 3DS DDR5 RDIMM. Up to 5600 MHz",
    "Network Ports": "Onboard 1G LAN ports (Intel i210), 1 dedicated IPMI LANRequest Quote"
},
{
    "name": "Supermicro CloudDC SuperServer SYS-122C-TN (Complete System Only) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-122c-tn_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "12 front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays (*NVMe/SAS/SATA support may require additional storage controller and/or cables)",
    "RAM": "Slot Count: 32 DIMM slots Max Memory (2DPC): Up to 2TB 6400MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)]Coming Soon Request Quote"
},
{
    "name": "CloudDC SuperServer SYS-222C-TN (Complete System Only) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-222c-tn_callout_angle.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Cloud Computing, High End Enterprise Server",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U",
    "Drive": "12 front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays, NVMe/SAS/SATA support may require additional storage controller and/or cables, please see the optional parts list for details",
    "RAM": "32 DIMM slots Max Memory (2DPC): Up to 2TB 6400MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Coming Soon Request Quote"
},
{
    "name": "Supermicro WIO SuperServer SYS-112B-WR (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-112b-wr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Networking Appliance, Cloud Computing, Data Center Optimized, Database/Storage, Storage Headnode, Entry GPU server, Web Cache, CDN, Video Streaming, AI Inference",
    "CPU": "Single Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "8 front hot-swap 2.5\" SATA drive bays",
    "RAM": "32x DDR4 DIMM Slots",
    "Network Ports": "2 RJ45 1 GbE LAN port(s) 1 RJ45 1 GbE Dedicated BMC LAN port(s) (IPMI shared on LAN port 1)Request Quote"
},
{
    "name": "Supermicro CloudDC SuperServer SYS-112C-TN (Complete System Only ) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-112c-tn_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, HPCCDN, Edge Nodes, Cloud Computing, Data Center Optimized, Storage Headnode",
    "CPU": "Single Socket E2 (LGA-4710), Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "8 front hot-swap 2.5\" PCIe 5.0 NVMe/SAS*/SATA* drive bays",
    "RAM": "16 DIMM slots/8 Channels",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Request Quote"
},
{
    "name": "Hyper SuperServer SYS-112H-TN (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-112h-tn_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Financial, Scale Out All-Flash NVMe Storage, Data Center Enterprise Applications, Cloud Computing, AI InferenceCDN/vCDN/Cloud CDN",
    "CPU": "Single Intel Xeon 6 Processor",
    "Chassis": "1U",
    "Drive": "Default: Total 8 bays 8 front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays Option A: Total 12 bays 8 front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays 4 front hot-swap 2.5\" SAS*/SATA* drive bays (*NVMe/SAS/SATA support may require additional storage controller and/or cables, please see the optional parts list for details)",
    "RAM": "Slot Count: 16 DIMM slots Max Memory (1DPC): Up to 1TB 6400MT/s ECC DDR5 RDIMM Max Memory (2DPC): Up to 1TB 5200MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Request Quote"
},
{
    "name": "Hyper SuperServer SYS-122H-TN (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-122h-tn_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Software-defined Storage, High Performance Computing, Cloud Computing, Enterprise Server",
    "CPU": "Dual Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "1U",
    "Drive": "8x 2.5\" hot-swap NVMe/SATA/SAS drive bays; Optional 4x 2.5\" hot-swap NVMe/SAS/SATA drive bays; 2x internal M.2 NVMe drive slots; Optional RAID support via storage add-on card",
    "RAM": "Slot Count: 32 DIMM slots Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM Max Memory (2DPC): Up to 4TB 5200MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Request Quote"
},
{
    "name": "Hyper SuperServer SYS-212H-TN (Complete System Only ) New",
    "price": "\u00a31.20",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-212h-tn_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Software-defined Storage, AI Inference and Machine Learning, Cloud Computing, Enterprise Server, Data Center Optimized, Database Processing and High Density Storage",
    "CPU": "Single Socket E2 (LGA-4710) Intel Xeon 6700 series processors with E-cores",
    "Chassis": "2U Rackmountable",
    "Drive": "Default: 8 front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays. Option A: Total 16 8 front hot-swap 2.5\" PCIe 5.0 x4 NVMe* drive bays, 8 front hot-swap 2.5\" SAS*/SATA* drive bays. Option B: 16 front hot-swap 2.5\" SAS*/SATA* drive bays. Option C: 24 front hot-swap 2.5\" SAS*/SATA* drive bays. (*NVMe/SAS/SATA support may require additional storage controller and/or cables, please see the optional parts list for details)",
    "RAM": "Slot Count: 16 DIMM slots Max Memory (1DPC): Up to 1TB 6400MT/s ECC DDR5 RDIMM / Max Memory (2DPC): Up to 2TB 5200MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN portRequest Quote"
},
{
    "name": "Hyper SuperServer SYS-222H-TN (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-222h-tn_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Virtualization, Software-defined Storage, High Performance Computing, Cloud Computing, Enterprise Server",
    "CPU": "Dual Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U Rackmount",
    "Drive": "Default: Total 8 bays front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays, Option A: Total 16 bays front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays, Option B: Total 24 bays front hot-swap 2.5\" NVMe*/SAS*/SATA* drive bays",
    "RAM": "Slot Count: 32 DIMM slots - Max Memory (1DPC): Up to 2TB 6400MT/s ECC DDR5 RDIMM, Max Memory (2DPC): Up to 4TB 5200MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s)Request Quote"
},
{
    "name": "WIO SuperServer SYS-512B-WR (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-512b-wr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Enterprise Applications, General Purpose Computing, Cloud Computing, Web/Hosting Application, Network Appliance, Database/Storage, Storage Headnode, Entry GPU server",
    "CPU": "Single Intel Xeon 6 6700 series processor with E-cores",
    "Chassis": "1U Rackmount/p>",
    "Drive": "Default: Total 4 front hot-swap 3.5\" SATA drive bays, Option A: Total 4 front hot-swap 2.5\" PCIe 5.0 x4 NVMe* drive bays,  Option B: Total 4 front hot-swap 3.5\"/2.5\" SAS* drive bays",
    "RAM": "Slot Count: 8 DIMM slots/8 Channels Max Memory (1DPC): Up to 1TB 6400MT/s ECC DDR5 RDIMM",
    "Network Ports": "2 RJ45 1 GbE LAN port(s) 1 RJ45 1 GbE Dedicated BMC LAN port(s) (IPMI shared on LAN port 1)Request Quote"
},
{
    "name": "GrandTwin SuperServer SYS-212GT-HNR (Complete System Only) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-212gt-hnr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Scale Out All-Flash NVMe Storage, Scale-Out Object Storage, Web Server, Firewall Application, Data Center Optimized, Value IaaS, Cloud Computing, Compact Server, Virtualization Server (VSAN), Network Function Virtualization, Software Defined Storage, General Purpose, Multi-Purpose CDN, Mission Critical Web Applications",
    "CPU": "Single Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U 4-Node Rackmountable",
    "Drive": "Default: Total 6 front hot-swap 2.5\" PCIe 5.0 x4 NVMe drive bays per node",
    "RAM": "Slot Count: 16 DIMM slots/2 Channels Max Memory (2DPC): Up to 1TB 6400MT/s ECC DDR5 RDIMM per node",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s) per nodeComing Soon Request Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-222BT-DNR (Complete System Only) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-222bt-dnr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "High-Performance File System, Diskless HPC Clusters, Scale Out All-Flash NVMe Storage, Big Data Analytics and AI",
    "CPU": "Dual Socket E2 Intel Xeon 6 6700 series processors with E-cores up to 330W with air or liquid cooling",
    "Chassis": "2U 2 Node Rackmountable",
    "Drive": "12 front hot-swap 2.5\" PCIe 5.0 NVMe drive bays per node",
    "RAM": "16 DIMM slots Max Memory (1DPC): Up to 4TB 64000MT/s ECC DDR5 RDIMM per Node",
    "Network Ports": "Via AIOMComing Soon Request Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-222BT-HNC8R (Complete System Only ) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-222bt-hnc8r_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Container-as-a-Service; Application Accelerator, Diskless HPC Clusters, All-Flash Hyperconverged Infrastructure",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6700 series processors with E-cores per Node",
    "Chassis": "2U / 4-Node Rackmountable",
    "Drive": "Default: Total 6 bays- 2 front hot-swap 2.5\" PCIe 5.0 NVMe/SAS drive bays, 4 front hot-swap 2.5\" PCIe 4.0 NVMe/SAS drive bays",
    "RAM": "Slot Count: 16 DIMM slots Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN portRequest Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-622BT-DNC8R (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-622bt-dnc8r_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Hyperconverged Infrastructure, Scale-Out Object Storage, Back-up & Recovery",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U 2-Node Rackmountable",
    "Drive": "Total 6 bays 2 front hot-swap 3.5\" PCIe 5.0 NVMe/SAS drive bays, 4 front hot-swap 3.5\" PCIe 4.0 NVMe/SAS drive bays per Node",
    "RAM": "Slot Count: 16 DIMM slots Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM Per Node",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s) per NodeRequest Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-221BT-HNR (Complete System Only )",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-221bt-hnr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "All-Flash NVMe Hyperconverged Infrastructure, Container-as-a-Service; Application Accelerator, High-Performance File SystemDiskless HPC Clusters",
    "CPU": "Dual Socket E (LGA-4677), 5th Gen Intel Xeon / 4th Gen Intel Xeon Scalable processors, Supports Intel Xeon CPU Max Series with high bandwidth memory (HBM)\u200b",
    "Chassis": "2U 2 Node Rackmountable",
    "Drive": "6 front hot-swap 2.5\" PCIe 5.0 NVMe drive bays per Node",
    "RAM": "16 DIMM slots Max Memory (1DPC): Up to 4TB 5600MT/s ECC DDR5 RDIMM per Node",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s) per NodeRequest Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-222BT-HER (Complete System Only) Coming Soon",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-222bt-her_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "All-Flash NVMe Hyperconverged Infrastructure, Container-as-a-Service; Application Accelerator, High-Performance File System, Diskless HPC Clusters",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U 4 Node Rackmountbale",
    "Drive": "10 hot-swap 2.5\" NVMe (PCIe4.0 x4) drive bays",
    "RAM": "16 DIMM slots Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM",
    "Network Ports": "2 PCIe 5.0 x16 LP slots, 1 PCIe 5.0 x16 AIOM slot (OCP 3.0 compatible)Coming Soon Request Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-222BT-HNR (Complete System Only ) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-222bt-hnr_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "All-Flash NVMe Hyperconverged Infrastructure, Container-as-a-Service; Application Accelerator, High-Performance File System, Diskless HPC Clusters",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U 4 Node Rackmountable",
    "Drive": "6 front hot-swap 2.5\" PCIe 5.0 NVMe drive bays",
    "RAM": "16 DIMM slots Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM per node",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s) per nodeRequest Quote"
},
{
    "name": "Supermicro BigTwin SuperServer SYS-622BT-HNC8R (Complete System Only) New",
    "price": "N/A",
    "img": "https://serverfactory.com/media/catalog/product/cache/1ae1d96446cbe90d8f2f7a109a236a77/s/y/sys-622bt-hnc8r_main.jpg",
    "category": "rackmount",
    "Key Features/Applications": "Hyperconverged Infrastructure, Scale-Out File Storage, Back-up & Recovery",
    "CPU": "Dual Socket E2 (LGA-4710) Intel Xeon 6 6700 series processors with E-cores",
    "Chassis": "2U 4 Node Rackmountable",
    "Drive": "Total 3 bays: 2 front hot-swap 3.5\" PCIe 5.0 NVMe/SAS drive bays, 1 front hot-swap 3.5\" PCIe 4.0 NVMe/SAS drive bay per node",
    "RAM": "16 DIMM slots Max Memory (1DPC): Up to 4TB 6400MT/s ECC DDR5 RDIMM per Node",
    "Network Ports": "1 RJ45 1 GbE Dedicated BMC LAN port(s) per NodeRequest Quote"
}



              
       
];

// Display products on page load
document.addEventListener('DOMContentLoaded', displayProducts);

function navigateToProducts(name) {
 window.location.href = `productdetailPage.html?name=${encodeURIComponent(name)}`;
}