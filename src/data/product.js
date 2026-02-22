

export const WHATSAPP_NUMBER = "+917016896834"; // Replace with actual number
export const INSTAGRAM_HANDLE = "the.craftedsoul"; // Replace with actual handle
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const INSTAGRAM_LINK = `https://instagram.com/${INSTAGRAM_HANDLE}`;

export const getWhatsAppProductLink = (productName) =>
  `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(`Hi! I'm interested in "${productName}" from The Crafted Soul. Can you share more details?`)}`;

export const categories = [
  { id: "earrings", name: "Earrings", slug: "resin-earrings" },
  { id: "pendants", name: "Pendants", slug: "resin-pendants" },
  { id: "bracelets", name: "Bracelets", slug: "resin-bracelets" },
  { id: "keychains", name: "Keychains", slug: "resin-keychains" },
  { id: "hair-accessories", name: "Hair Accessories", slug: "resin-hair-accessories" },
  { id: "custom", name: "Custom Orders", slug: "custom-orders" },
];

export const products = [
  {
    id: "floral-drop-earrings",
    name: "Floral Drop Earrings",
    price: "₹499",
    description: "Delicate pressed flower resin earrings with pink and lavender blooms.",
    longDescription: "These stunning drop earrings feature real pressed flowers carefully preserved in crystal-clear resin. Each pair is one-of-a-kind, with natural pink and lavender blooms that catch the light beautifully. Finished with hypoallergenic hooks, these are perfect for everyday elegance.",
    category: "earrings",
    images: ["product-earrings-1"],
    customizable: true,
    careInstructions: [
      "Avoid direct contact with water and perfume",
      "Store in a cool, dry place away from sunlight",
      "Handle with care — resin is lightweight but can chip if dropped",
      "Clean gently with a soft, dry cloth",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp. All orders are carefully packaged with love.",
  },
  {
    id: "blossom-pendant",
    name: "Blossom Pendant Necklace",
    price: "₹649",
    description: "Gold-accented resin pendant with real cherry blossoms and gold flakes.",
    longDescription: "A breathtaking round pendant featuring real cherry blossom petals and shimmering gold flakes, suspended on a delicate gold chain. This piece is a celebration of nature's beauty preserved forever in resin.",
    category: "pendants",
    images: ["product-pendant-1"],
    customizable: true,
    careInstructions: [
      "Keep away from harsh chemicals",
      "Store flat to prevent tangling",
      "Avoid prolonged sun exposure",
      "Wipe with a dry microfibre cloth",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp.",
  },
  {
    id: "garden-bracelet",
    name: "Garden Cuff Bracelet",
    price: "₹599",
    description: "Resin cuff bracelet with tiny wildflowers and gold chain detail.",
    longDescription: "This unique cuff bracelet features a garden of tiny wildflowers frozen in time within clear resin. The gold chain adds a touch of elegance, making it the perfect statement piece for nature lovers.",
    category: "bracelets",
    images: ["product-bracelet-1"],
    customizable: true,
    careInstructions: [
      "Remove before washing hands or swimming",
      "Store separately to avoid scratches",
      "Keep away from extreme heat",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp.",
  },
  {
    id: "heart-keychain",
    name: "Heart Flower Keychain",
    price: "₹349",
    description: "Heart-shaped resin keychain with colorful pressed flowers.",
    longDescription: "A cheerful heart-shaped keychain bursting with colorful pressed flowers. Perfect as a gift or a personal accessory that brightens your day every time you reach for your keys.",
    category: "keychains",
    images: ["product-keychain-1"],
    customizable: false,
    careInstructions: [
      "Handle with care",
      "Avoid dropping on hard surfaces",
      "Keep away from direct heat",
    ],
    deliveryInfo: "Ships within 2–3 business days.",
  },
  {
    id: "rose-hair-clip",
    name: "Rose Petal Hair Clip",
    price: "₹399",
    description: "Elegant resin hair clip with preserved rose petals in blush pink.",
    longDescription: "This gorgeous oval hair clip features real preserved rose petals in soft blush pink tones. A perfect blend of nature and elegance, designed to add a feminine touch to any hairstyle.",
    category: "hair-accessories",
    images: ["product-hairclip-1"],
    customizable: true,
    careInstructions: [
      "Clip gently to avoid cracking",
      "Store in a soft pouch",
      "Keep away from perfume sprays",
    ],
    deliveryInfo: "Ships within 3–5 business days after confirmation via WhatsApp.",
  },
  {
    id: "custom-floral-earrings",
    name: "Custom Floral Earrings",
    price: "₹699",
    description: "Design your own! Choose flowers, colors, and shapes for bespoke resin earrings.",
    longDescription: "Create your dream earrings! Choose from a variety of real dried flowers, colors, and shapes. We'll craft a one-of-a-kind pair just for you. Perfect for gifting or treating yourself to something truly personal.",
    category: "custom",
    images: ["product-custom-earrings"],
    customizable: true,
    careInstructions: [
      "Same care as all resin pieces",
      "Avoid water and chemicals",
      "Store in provided pouch",
    ],
    deliveryInfo: "Custom pieces take 7–10 business days. Confirmation and design discussion via WhatsApp.",
  },
];
