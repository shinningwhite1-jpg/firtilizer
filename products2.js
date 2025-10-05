// Default products - will be merged with admin-added products
const defaultProducts = [
  {
    id: 101,
    sku: "SV-GG-10",
    name: {
      en: "GreenGrow Organic Compost Mix (10kg)",
      hi: "ग्रीनग्रो ऑर्गेनिक कम्पोस्ट मिक्स (10किलो)",
      gu: "ગ્રીનગ્રો ઓર્ગેનિક કમ્પોસ્ટ મિક્સ (10કિલો)"
    },
    shortDesc: {
      en: "100% natural compost to enrich soil and boost yield.",
      hi: "मिट्टी को पोषित करने वाला 100% प्राकृतिक कम्पोस्ट।",
      gu: "માટી સમૃદ્ધ કરવા માટે 100% કુદરતી ખાતર."
    },
    longDesc: {
      en: "An organic compost rich in nutrients and microbes. Improves soil aeration and plant growth.",
      hi: "पोषक तत्वों और सूक्ष्मजीवों से भरपूर जैविक खाद। मिट्टी की हवा और पौधों की वृद्धि में सुधार करती है।",
      gu: "પોષક તત્ત્વો અને સૂક્ષ્મજીવો ભરપૂર જૈવિક ખાતર. માટીની હવાની સ્થિતિ સુધારે છે અને વૃદ્ધિ વધારે છે."
    },
    category: "Organic",
    mainCategory: "Bio-Fertilizer",
    npk: "0-0-0",
    weightKg: 10,
    priceINR: 299,
    stock: 120,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMofkOf01g4ZqpvOh2BMSAr2_XVRAgLvDiVA&s",
    directions: {
      en: "Apply 2–3 kg per sq.m during land preparation.",
      hi: "भूमि की तैयारी के समय प्रति वर्ग मीटर 2-3 किलो लगाएं।",
      gu: "જમીન તૈયાર કરતી વખતે પ્રતિ ચો.મી. 2–3 કિગ્રા લગાવો."
    },
    rating: 4.5,
    reviews: 125,
    images: ["images/product1.jpg", "images/product1-2.jpg", "images/product1-3.jpg"],
    variations: [
      { size: "5kg", price: 159, stock: 85 },
      { size: "10kg", price: 299, stock: 120 },
      { size: "25kg", price: 699, stock: 45 }
    ],
    benefits: [
      "100% organic and natural",
      "Rich in beneficial microbes",
      "Improves soil structure and aeration",
      "Boosts plant growth and yield",
      "Environmentally friendly"
    ],
    specifications: {
      "NPK Ratio": "0-0-0",
      "Organic Matter": "85%",
      "pH Level": "6.5-7.5",
      "Item Weight": "10 kg",
      "Package Dimensions": "40 x 30 x 15 cm",
      "Shelf Life": "2 years",
      "Country of Origin": "India"
    }
  },
  {
    id: 102,
    sku: "SV-AB-5",
    name: {
      en: "AgroBoost 19:19:19 (5kg)",
      hi: "एग्रोबूस्ट 19:19:19 (5किलो)",
      gu: "એગ્રોબૂસ્ટ 19:19:19 (5કિલો)"
    },
    shortDesc: {
      en: "Balanced NPK fertilizer for all crops.",
      hi: "सभी फसलों के लिए संतुलित NPK उर्वरक।",
      gu: "બધી પાકો માટે સંતુલિત NPK ખાતર."
    },
    longDesc: {
      en: "Provides essential nitrogen, phosphorus, and potassium for healthy plant development.",
      hi: "स्वस्थ पौध विकास के लिए आवश्यक नाइट्रोजन, फॉस्फोरस और पोटेशियम प्रदान करता है।",
      gu: "સ્વસ્થ છોડ વિકાસ માટે જરૂરી નાઇટ્રોજન, ફોસ્ફરસ અને પોટેશિયમ પૂરું પાડે છે."
    },
    category: "Chemical",
    mainCategory: "Nitrogen",
    npk: "19-19-19",
    weightKg: 5,
    priceINR: 450,
    stock: 80,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdcFZo0pbwdu4SjTHXgOY2KuUOnLXhiY98YQ&s",
    directions: {
      en: "Mix 50g per liter of water and spray on plants.",
      hi: "प्रति लीटर पानी में 50 ग्राम मिलाएं और पौधों पर छिड़कें।",
      gu: "પ્રતિ લીટર પાણીમાં 50ગ્રામ મિક્સ કરો અને છોડ પર છાંટો."
    },
    rating: 4.7,
    reviews: 95,
    cropSuitability: ["All Crops"],
    form: "Liquid",
    composition: "N 19%, P 19%, K 19%, Micronutrients",
    dosage: "50g per 15L water",
    benefits: ["Balanced nutrition", "Quick absorption", "All-stage application"],
    safetyInfo: "Non-toxic, pH neutral"
  },
  {
    id: 103,
    sku: "SV-BV-1L",
    name: {
      en: "BioVita Liquid Foliar (1L)",
      hi: "बायोविटा लिक्विड फोलियर (1लीटर)",
      gu: "બાયોવિટા લિક્વિડ ફોલિયર (1લીટર)"
    },
    shortDesc: {
      en: "Liquid fertilizer for foliar application.",
      hi: "पत्तियों पर छिड़काव के लिए तरल उर्वरक।",
      gu: "પાંદડા પર છાંટવા માટે દ્રાવ્ય ખાતર."
    },
    longDesc: {
      en: "Enhances nutrient uptake through leaves, promoting faster growth and higher yields.",
      hi: "पत्तियों के माध्यम से पोषक तत्वों की अवशोषण को बढ़ाता है, तेजी से विकास और उच्च उपज को बढ़ावा देता है।",
      gu: "પાંદડા દ્વારા પોષક તત્ત્વોનું શોષણ વધારે છે, ઝડપી વૃદ્ધિ અને વધુ ઉપજને પ્રોત્સાહન આપે છે."
    },
    category: "Organic",
    mainCategory: "Bio-Fertilizer",
    npk: "10-5-5",
    weightKg: 1,
    priceINR: 350,
    stock: 60,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4CGPD4FpwVNgRtRqWYb_lTHLwpyRmJPzhNg&s",
    directions: {
      en: "Dilute 20ml in 1L water and spray on leaves.",
      hi: "1 लीटर पानी में 20 मिलीलीटर घोलें और पत्तियों पर छिड़कें।",
      gu: "1લીટર પાણીમાં 20મિલી ઘોલો અને પાંદડા પર છાંટો."
    },
    rating: 4.3,
    reviews: 67,
    cropSuitability: ["Vegetables", "Fruits", "Flowers"],
    form: "Liquid",
    composition: "Seaweed extract 30%, Amino acids, Micronutrients",
    dosage: "20ml per 1L water",
    benefits: ["Foliar nutrition", "Stress resistance", "Improved quality"],
    safetyInfo: "Organic, safe for edible crops"
  },
  {
    id: 104,
    sku: "SV-RM-10",
    name: {
      en: "RootMax Granular Fertilizer (10kg)",
      hi: "रूटमैक्स ग्रैन्युलर उर्वरक (10किलो)",
      gu: "રૂટમેક્સ ગ્રેન્યુલર ખાતર (10કિલો)"
    },
    shortDesc: {
      en: "Promotes strong root development.",
      hi: "मजबूत जड़ विकास को बढ़ावा देता है।",
      gu: "મજબૂત મૂળ વિકાસને પ્રોત્સાહન આપે છે."
    },
    longDesc: {
      en: "Specialized fertilizer for root growth, improving water and nutrient absorption.",
      hi: "जड़ विकास के लिए विशेष उर्वरक, पानी और पोषक तत्वों के अवशोषण में सुधार करता है।",
      gu: "મૂળ વિકાસ માટે વિશેષ ખાતર, પાણી અને પોષક તત્ત્વોનું શોષણ સુધારે છે."
    },
    category: "Organic",
    mainCategory: "Phosphate",
    npk: "5-10-10",
    weightKg: 10,
    priceINR: 399,
    stock: 90,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU9jYMSY4HVUPAUe0bRmvJtC2MDUpEFTHGpg&s",
    directions: {
      en: "Apply 1-2 kg per plant at base during planting.",
      hi: "बुआई के समय प्रति पौधे आधार पर 1-2 किलो लगाएं।",
      gu: "વાવેતર સમયે પ્રતિ છોડ બેઝ પર 1-2 કિગ્રા લગાવો."
    },
    rating: 4.6,
    reviews: 89,
    cropSuitability: ["All Crops"],
    form: "Granular",
    composition: "P 10%, K 10%, Organic matter",
    dosage: "1-2 kg per plant",
    benefits: ["Strong root development", "Better nutrient absorption", "Increased yield"],
    safetyInfo: "Safe for all soil types"
  },
  {
    id: 105,
    sku: "SV-BP-2",
    name: {
      en: "BloomPlus Flower Booster (2kg)",
      hi: "ब्लूमप्लस फ्लावर बूस्टर (2किलो)",
      gu: "બ્લૂમપ્લસ ફ્લાવર બૂસ્ટર (2કિલો)"
    },
    shortDesc: {
      en: "Enhances flowering and fruit setting.",
      hi: "फूल आने और फल लगने को बढ़ावा देता है।",
      gu: "ફૂલ આવવું અને ફળ લાગવાને વધારે છે."
    },
    longDesc: {
      en: "High phosphorus content promotes abundant blooms and better fruit production.",
      hi: "उच्च फॉस्फोरस सामग्री प्रचुर फूलों और बेहतर फल उत्पादन को बढ़ावा देती है।",
      gu: "ઉચ્ચ ફોસ્ફરસ સામગ્રી પ્રચુર ફૂલો અને વધુ સારી ફળ ઉત્પાદનને પ્રોત્સાહન આપે છે."
    },
    category: "Chemical",
    mainCategory: "Potassium",
    npk: "10-50-10",
    weightKg: 2,
    priceINR: 299,
    stock: 70,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxqTVAUZjtpvLiYP1z_DRVXPNNBm3GQpBlww&s",
    directions: {
      en: "Mix 20g per liter and apply to soil around plants.",
      hi: "प्रति लीटर में 20 ग्राम मिलाएं और पौधों के चारों ओर मिट्टी में लगाएं।",
      gu: "પ્રતિ લીટરમાં 20ગ્રામ મિક્સ કરો અને છોડની આસપાસ માટીમાં લગાવો."
    },
    rating: 4.4,
    reviews: 76,
    cropSuitability: ["Flowers", "Fruits", "Vegetables"],
    form: "Granular",
    composition: "P 50%, K 10%, Micronutrients",
    dosage: "20g per plant",
    benefits: ["Enhanced flowering", "Better fruit set", "Improved quality"],
    safetyInfo: "Safe for edible produce"
  },
  {
    id: 106,
    sku: "SV-SE-5",
    name: {
      en: "SoilEnrich Vermicompost (5kg)",
      hi: "सोइलएंरिच वर्मीकम्पोस्ट (5किलो)",
      gu: "સોઇલએનરિચ વર્મીકમ્પોસ્ટ (5કિલો)"
    },
    shortDesc: {
      en: "Worm castings for nutrient-rich soil.",
      hi: "पोषक तत्वों से भरपूर मिट्टी के लिए केंचुआ के उच्छिष्ट।",
      gu: "પોષક તત્ત્વો ભરપૂર માટી માટે કીડાના ઉચ્છિષ્ટ."
    },
    longDesc: {
      en: "Natural vermicompost improves soil structure and provides slow-release nutrients.",
      hi: "प्राकृतिक वर्मीकम्पोस्ट मिट्टी की संरचना में सुधार करता है और धीमी रिलीज पोषक तत्व प्रदान करता है।",
      gu: "કુદરતી વર્મીકમ્પોસ્ટ માટીની રચનામાં સુધારો કરે છે અને ધીમી રિલીઝ પોષક તત્ત્વો પૂરા પાડે છે."
    },
    category: "Organic",
    mainCategory: "Bio-Fertilizer",
    npk: "1-0-0",
    weightKg: 5,
    priceINR: 249,
    stock: 100,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXBfL1Axz-gfF6bpxKhKovwhdMDpy72KAXjA&s",
    directions: {
      en: "Spread 1-2 kg per sq.m and mix into topsoil.",
      hi: "प्रति वर्ग मीटर 1-2 किलो फैलाएं और ऊपरी मिट्टी में मिलाएं।",
      gu: "પ્રતિ ચો.મી. 1-2 કિગ્રા ફેલાવો અને ટોપસોઇલમાં મિક્સ કરો."
    },
    rating: 4.8,
    reviews: 112,
    cropSuitability: ["All Crops"],
    form: "Granular",
    composition: "Vermicompost 80%, Beneficial microbes",
    dosage: "1-2 kg per sq.m",
    benefits: ["Soil enrichment", "Microbial activity", "Long-term fertility"],
    safetyInfo: "100% organic, safe for all"
  }
];

// Make default products available globally
window.defaultProducts = defaultProducts;