import { createContext, useContext, useEffect, useState } from "react";

const LanguageContext = createContext(null);

// =========================================================
// TRANSLATIONS
// =========================================================

const translations = {
  // =======================================================
  // HINDI
  // =======================================================
  hi: {
    home: "होम",
    country: "देश",
    world: "दुनिया",
    politics: "राजनीति",
    business: "बिजनेस",
    sports: "खेल",
    entertainment: "मनोरंजन",
    technology: "टेक्नोलॉजी",
    education: "शिक्षा",
    video: "वीडियो",
    search: "खोजें",
    searchNews: "खबरें खोजें...",
    adminLogin: "एडमिन लॉगिन",
    tagline: "देश की खबर, देश की आवाज़",
    topText: "देश की हर खबर, सबसे पहले",
    language: "भाषा",

    viewAll: "सभी देखें",
    live: "LIVE",

    bigBreakingNews: "बड़ी और ब्रेकिंग खबरें",
    importantUpdate: "महत्वपूर्ण अपडेट",
    breakingNews: "ब्रेकिंग न्यूज़",

    videoNews: "वीडियो न्यूज़",
    latestVideos: "लेटेस्ट वीडियो",
    videosLoading: "वीडियो लोड हो रहे हैं...",
    videoLoading: "वीडियो लोड हो रहे हैं...",
    retry: "फिर से प्रयास करें",
    videoLoadFailed: "वीडियो लोड नहीं हो पाया।",
    browserVideoSupport:
      "आपका ब्राउज़र वीडियो प्ले करने को सपोर्ट नहीं करता।",
    latestVideoNews: "लेटेस्ट वीडियो न्यूज़",
    noVideos: "अभी कोई वीडियो उपलब्ध नहीं है।",
    videoAdminMessage:
      "Admin Media Library में वीडियो अपलोड करने पर यहाँ दिखाई देंगे।",
    videoApiError: "वीडियो लोड नहीं हो पाए।",

    featuredStories: "फीचर्ड स्टोरीज़",
    stories: "स्टोरीज़",
    featuredLoading: "फीचर्ड स्टोरीज़ लोड हो रही हैं...",
    featured: "फीचर्ड",
    topStory: "TOP STORY",
    readFullStory: "पूरी खबर पढ़ें",
    readFullNews: "पूरी खबर पढ़ें",
    noFeaturedNews: "अभी कोई Featured News उपलब्ध नहीं है।",

    latestNews: "ताज़ा खबरें",
    latestNewsSubtitle: "देश और दुनिया की नई अपडेट्स",
    latestSubtitle: "देश और दुनिया की नई अपडेट्स",
    latestLoading: "ताज़ा खबरें लोड हो रही हैं...",
    news: "न्यूज़",
    readMoreNews: "और खबरें पढ़ें",
    noLatestNews: "अभी कोई ताज़ा खबर उपलब्ध नहीं है।",

    trendingNews: "ट्रेंडिंग खबरें",
    trendingNewsDescription: "सबसे ज्यादा पढ़ी जा रही खबरें",
    trendingLoading: "ट्रेंडिंग खबरें लोड हो रही हैं...",
    views: "व्यूज़",
    noTrendingNews: "अभी कोई Trending News उपलब्ध नहीं है।",

    newsLoadError: "खबरें लोड नहीं हो सकीं।",

    latestUpdate: "ताज़ा अपडेट",
  },

  // =======================================================
  // ENGLISH
  // =======================================================
  en: {
    home: "Home",
    country: "India",
    world: "World",
    politics: "Politics",
    business: "Business",
    sports: "Sports",
    entertainment: "Entertainment",
    technology: "Technology",
    education: "Education",
    video: "Video",
    search: "Search",
    searchNews: "Search news...",
    adminLogin: "Admin Login",
    tagline: "The country's news, the country's voice",
    topText: "Every important news, first",
    language: "Language",

    viewAll: "View All",
    live: "LIVE",

    bigBreakingNews: "Top & Breaking News",
    importantUpdate: "Important Update",
    breakingNews: "Breaking News",

    videoNews: "Video News",
    latestVideos: "Latest Videos",
    videosLoading: "Videos are loading...",
    videoLoading: "Videos are loading...",
    retry: "Retry",
    videoLoadFailed: "Video could not be loaded.",
    browserVideoSupport:
      "Your browser does not support video playback.",
    latestVideoNews: "Latest Video News",
    noVideos: "No videos available right now.",
    videoAdminMessage:
      "Videos uploaded in Admin Media Library will appear here.",
    videoApiError: "Videos could not be loaded.",

    featuredStories: "Featured Stories",
    stories: "Stories",
    featuredLoading: "Featured stories are loading...",
    featured: "Featured",
    topStory: "TOP STORY",
    readFullStory: "Read Full Story",
    readFullNews: "Read Full News",
    noFeaturedNews: "No Featured News available right now.",

    latestNews: "Latest News",
    latestNewsSubtitle:
      "Latest updates from India and around the world",
    latestSubtitle:
      "Latest updates from India and around the world",
    latestLoading: "Latest news is loading...",
    news: "News",
    readMoreNews: "Read More News",
    noLatestNews: "No latest news available right now.",

    trendingNews: "Trending News",
    trendingNewsDescription:
      "Most viewed and trending stories",
    trendingLoading: "Trending news is loading...",
    views: "Views",
    noTrendingNews: "No Trending News available right now.",

    newsLoadError: "News could not be loaded.",

    latestUpdate: "Latest Update",
  },

  // =======================================================
  // BENGALI
  // =======================================================
  bn: {
    home: "হোম",
    country: "দেশ",
    world: "বিশ্ব",
    politics: "রাজনীতি",
    business: "ব্যবসা",
    sports: "খেলা",
    entertainment: "বিনোদন",
    technology: "প্রযুক্তি",
    education: "শিক্ষা",
    video: "ভিডিও",
    search: "অনুসন্ধান",
    searchNews: "খবর খুঁজুন...",
    adminLogin: "অ্যাডমিন লগইন",
    tagline: "দেশের খবর, দেশের কণ্ঠস্বর",
    topText: "প্রতিটি গুরুত্বপূর্ণ খবর সবার আগে",
    language: "ভাষা",

    viewAll: "সব দেখুন",
    live: "লাইভ",

    bigBreakingNews: "বড় এবং ব্রেকিং খবর",
    importantUpdate: "গুরুত্বপূর্ণ আপডেট",
    breakingNews: "ব্রেকিং নিউজ",

    videoNews: "ভিডিও নিউজ",
    latestVideos: "সর্বশেষ ভিডিও",
    videosLoading: "ভিডিও লোড হচ্ছে...",
    videoLoading: "ভিডিও লোড হচ্ছে...",
    retry: "আবার চেষ্টা করুন",
    videoLoadFailed: "ভিডিও লোড করা যায়নি।",
    browserVideoSupport:
      "আপনার ব্রাউজার ভিডিও প্লেব্যাক সমর্থন করে না।",
    latestVideoNews: "সর্বশেষ ভিডিও নিউজ",
    noVideos: "এই মুহূর্তে কোনো ভিডিও নেই।",
    videoAdminMessage:
      "Admin Media Library-তে আপলোড করা ভিডিও এখানে দেখা যাবে।",
    videoApiError: "ভিডিও লোড করা যায়নি।",

    featuredStories: "ফিচার্ড স্টোরিজ",
    stories: "স্টোরিজ",
    featuredLoading: "ফিচার্ড স্টোরিজ লোড হচ্ছে...",
    featured: "ফিচার্ড",
    topStory: "শীর্ষ খবর",
    readFullStory: "সম্পূর্ণ খবর পড়ুন",
    readFullNews: "সম্পূর্ণ খবর পড়ুন",
    noFeaturedNews: "এই মুহূর্তে কোনো ফিচার্ড নিউজ নেই।",

    latestNews: "সর্বশেষ খবর",
    latestNewsSubtitle: "দেশ ও বিশ্বের সর্বশেষ আপডেট",
    latestSubtitle: "দেশ ও বিশ্বের সর্বশেষ আপডেট",
    latestLoading: "সর্বশেষ খবর লোড হচ্ছে...",
    news: "নিউজ",
    readMoreNews: "আরও খবর পড়ুন",
    noLatestNews: "এই মুহূর্তে কোনো সর্বশেষ খবর নেই।",

    trendingNews: "ট্রেন্ডিং খবর",
    trendingNewsDescription:
      "সবচেয়ে বেশি পড়া ও ট্রেন্ডিং খবর",
    trendingLoading: "ট্রেন্ডিং খবর লোড হচ্ছে...",
    views: "ভিউ",
    noTrendingNews: "এই মুহূর্তে কোনো ট্রেন্ডিং নিউজ নেই।",

    newsLoadError: "খবর লোড করা যায়নি।",

    latestUpdate: "সর্বশেষ আপডেট",
  },

  // =======================================================
  // MARATHI
  // =======================================================
  mr: {
    home: "मुख्यपृष्ठ",
    country: "देश",
    world: "जग",
    politics: "राजकारण",
    business: "व्यवसाय",
    sports: "क्रीडा",
    entertainment: "मनोरंजन",
    technology: "तंत्रज्ञान",
    education: "शिक्षण",
    video: "व्हिडिओ",
    search: "शोधा",
    searchNews: "बातम्या शोधा...",
    adminLogin: "अॅडमिन लॉगिन",
    tagline: "देशाची बातमी, देशाचा आवाज",
    topText: "प्रत्येक महत्त्वाची बातमी सर्वप्रथम",
    language: "भाषा",

    viewAll: "सर्व पहा",
    live: "लाईव्ह",

    bigBreakingNews: "मोठ्या आणि ब्रेकिंग बातम्या",
    importantUpdate: "महत्त्वाचे अपडेट",
    breakingNews: "ब्रेकिंग न्यूज",

    videoNews: "व्हिडिओ न्यूज",
    latestVideos: "नवीनतम व्हिडिओ",
    videosLoading: "व्हिडिओ लोड होत आहेत...",
    videoLoading: "व्हिडिओ लोड होत आहेत...",
    retry: "पुन्हा प्रयत्न करा",
    videoLoadFailed: "व्हिडिओ लोड होऊ शकला नाही.",
    browserVideoSupport:
      "तुमचा ब्राउझर व्हिडिओ प्लेबॅकला सपोर्ट करत नाही.",
    latestVideoNews: "नवीनतम व्हिडिओ न्यूज",
    noVideos: "सध्या कोणतेही व्हिडिओ उपलब्ध नाहीत.",
    videoAdminMessage:
      "Admin Media Library मध्ये अपलोड केलेले व्हिडिओ येथे दिसतील.",
    videoApiError: "व्हिडिओ लोड होऊ शकले नाहीत.",

    featuredStories: "फीचर्ड स्टोरीज",
    stories: "स्टोरीज",
    featuredLoading: "फीचर्ड स्टोरीज लोड होत आहेत...",
    featured: "फीचर्ड",
    topStory: "मुख्य बातमी",
    readFullStory: "पूर्ण बातमी वाचा",
    readFullNews: "पूर्ण बातमी वाचा",
    noFeaturedNews: "सध्या कोणतीही Featured News उपलब्ध नाही.",

    latestNews: "ताज्या बातम्या",
    latestNewsSubtitle: "देश आणि जगातील नवीन अपडेट्स",
    latestSubtitle: "देश आणि जगातील नवीन अपडेट्स",
    latestLoading: "ताज्या बातम्या लोड होत आहेत...",
    news: "न्यूज",
    readMoreNews: "आणखी बातम्या वाचा",
    noLatestNews: "सध्या कोणतीही ताजी बातमी उपलब्ध नाही.",

    trendingNews: "ट्रेंडिंग बातम्या",
    trendingNewsDescription:
      "सर्वाधिक वाचल्या जाणाऱ्या ट्रेंडिंग बातम्या",
    trendingLoading: "ट्रेंडिंग बातम्या लोड होत आहेत...",
    views: "व्ह्यूज",
    noTrendingNews: "सध्या कोणतीही ट्रेंडिंग न्यूज उपलब्ध नाही.",

    newsLoadError: "बातम्या लोड होऊ शकल्या नाहीत.",

    latestUpdate: "नवीनतम अपडेट",
  },

  // =======================================================
  // GUJARATI
  // =======================================================
  gu: {
    home: "હોમ",
    country: "દેશ",
    world: "વિશ્વ",
    politics: "રાજકારણ",
    business: "બિઝનેસ",
    sports: "રમતગમત",
    entertainment: "મનોરંજન",
    technology: "ટેકનોલોજી",
    education: "શિક્ષણ",
    video: "વિડિયો",
    search: "શોધો",
    searchNews: "સમાચાર શોધો...",
    adminLogin: "એડમિન લોગિન",
    tagline: "દેશના સમાચાર, દેશનો અવાજ",
    topText: "દરેક મહત્વપૂર્ણ સમાચાર સૌથી પહેલા",
    language: "ભાષા",

    viewAll: "બધા જુઓ",
    live: "લાઇવ",

    bigBreakingNews: "મોટા અને બ્રેકિંગ સમાચાર",
    importantUpdate: "મહત્વપૂર્ણ અપડેટ",
    breakingNews: "બ્રેકિંગ ન્યૂઝ",

    videoNews: "વિડિયો ન્યૂઝ",
    latestVideos: "તાજેતરના વિડિયો",
    videosLoading: "વિડિયો લોડ થઈ રહ્યા છે...",
    videoLoading: "વિડિયો લોડ થઈ રહ્યા છે...",
    retry: "ફરી પ્રયાસ કરો",
    videoLoadFailed: "વિડિયો લોડ થઈ શક્યો નથી.",
    browserVideoSupport:
      "તમારું બ્રાઉઝર વિડિયો પ્લેબેકને સપોર્ટ કરતું નથી.",
    latestVideoNews: "તાજેતરના વિડિયો ન્યૂઝ",
    noVideos: "હાલમાં કોઈ વિડિયો ઉપલબ્ધ નથી.",
    videoAdminMessage:
      "Admin Media Library માં અપલોડ કરેલા વિડિયો અહીં દેખાશે.",
    videoApiError: "વિડિયો લોડ થઈ શક્યા નથી.",

    featuredStories: "ફીચર્ડ સ્ટોરીઝ",
    stories: "સ્ટોરીઝ",
    featuredLoading: "ફીચર્ડ સ્ટોરીઝ લોડ થઈ રહી છે...",
    featured: "ફીચર્ડ",
    topStory: "મુખ્ય સમાચાર",
    readFullStory: "સંપૂર્ણ સમાચાર વાંચો",
    readFullNews: "સંપૂર્ણ સમાચાર વાંચો",
    noFeaturedNews: "હાલમાં કોઈ Featured News ઉપલબ્ધ નથી.",

    latestNews: "તાજા સમાચાર",
    latestNewsSubtitle: "દેશ અને દુનિયાના નવા અપડેટ્સ",
    latestSubtitle: "દેશ અને દુનિયાના નવા અપડેટ્સ",
    latestLoading: "તાજા સમાચાર લોડ થઈ રહ્યા છે...",
    news: "ન્યૂઝ",
    readMoreNews: "વધુ સમાચાર વાંચો",
    noLatestNews: "હાલમાં કોઈ તાજા સમાચાર ઉપલબ્ધ નથી.",

    trendingNews: "ટ્રેન્ડિંગ સમાચાર",
    trendingNewsDescription:
      "સૌથી વધુ વાંચવામાં આવતા ટ્રેન્ડિંગ સમાચાર",
    trendingLoading: "ટ્રેન્ડિંગ સમાચાર લોડ થઈ રહ્યા છે...",
    views: "વ્યૂઝ",
    noTrendingNews: "હાલમાં કોઈ ટ્રેન્ડિંગ ન્યૂઝ ઉપલબ્ધ નથી.",

    newsLoadError: "સમાચાર લોડ થઈ શક્યા નથી.",

    latestUpdate: "તાજેતરનું અપડેટ",
  },

  // =======================================================
  // TAMIL
  // =======================================================
  ta: {
    home: "முகப்பு",
    country: "நாடு",
    world: "உலகம்",
    politics: "அரசியல்",
    business: "வணிகம்",
    sports: "விளையாட்டு",
    entertainment: "பொழுதுபோக்கு",
    technology: "தொழில்நுட்பம்",
    education: "கல்வி",
    video: "வீடியோ",
    search: "தேடல்",
    searchNews: "செய்திகளைத் தேடுங்கள்...",
    adminLogin: "நிர்வாக உள்நுழைவு",
    tagline: "நாட்டின் செய்தி, நாட்டின் குரல்",
    topText: "முக்கியமான ஒவ்வொரு செய்தியும் முதலில்",
    language: "மொழி",

    viewAll: "அனைத்தையும் பார்க்க",
    live: "நேரலை",

    bigBreakingNews: "முக்கிய மற்றும் பிரேக்கிங் செய்திகள்",
    importantUpdate: "முக்கியமான புதுப்பிப்பு",
    breakingNews: "பிரேக்கிங் நியூஸ்",

    videoNews: "வீடியோ நியூஸ்",
    latestVideos: "சமீபத்திய வீடியோக்கள்",
    videosLoading: "வீடியோக்கள் ஏற்றப்படுகின்றன...",
    videoLoading: "வீடியோக்கள் ஏற்றப்படுகின்றன...",
    retry: "மீண்டும் முயற்சிக்கவும்",
    videoLoadFailed: "வீடியோவை ஏற்ற முடியவில்லை.",
    browserVideoSupport:
      "உங்கள் உலாவி வீடியோ பிளேபேக்கை ஆதரிக்கவில்லை.",
    latestVideoNews: "சமீபத்திய வீடியோ செய்திகள்",
    noVideos: "தற்போது வீடியோக்கள் எதுவும் இல்லை.",
    videoAdminMessage:
      "Admin Media Library-ல் பதிவேற்றப்பட்ட வீடியோக்கள் இங்கே தோன்றும்.",
    videoApiError: "வீடியோக்களை ஏற்ற முடியவில்லை.",

    featuredStories: "சிறப்பு செய்திகள்",
    stories: "செய்திகள்",
    featuredLoading: "சிறப்பு செய்திகள் ஏற்றப்படுகின்றன...",
    featured: "சிறப்பு",
    topStory: "முக்கிய செய்தி",
    readFullStory: "முழு செய்தியைப் படிக்கவும்",
    readFullNews: "முழு செய்தியைப் படிக்கவும்",
    noFeaturedNews: "தற்போது சிறப்பு செய்திகள் எதுவும் இல்லை.",

    latestNews: "சமீபத்திய செய்திகள்",
    latestNewsSubtitle: "நாடு மற்றும் உலகின் புதிய புதுப்பிப்புகள்",
    latestSubtitle: "நாடு மற்றும் உலகின் புதிய புதுப்பிப்புகள்",
    latestLoading: "சமீபத்திய செய்திகள் ஏற்றப்படுகின்றன...",
    news: "செய்தி",
    readMoreNews: "மேலும் செய்திகள்",
    noLatestNews: "தற்போது சமீபத்திய செய்திகள் எதுவும் இல்லை.",

    trendingNews: "டிரெண்டிங் செய்திகள்",
    trendingNewsDescription:
      "அதிகம் படிக்கப்படும் டிரெண்டிங் செய்திகள்",
    trendingLoading: "டிரெண்டிங் செய்திகள் ஏற்றப்படுகின்றன...",
    views: "பார்வைகள்",
    noTrendingNews: "தற்போது டிரெண்டிங் செய்திகள் எதுவும் இல்லை.",

    newsLoadError: "செய்திகளை ஏற்ற முடியவில்லை.",

    latestUpdate: "சமீபத்திய புதுப்பிப்பு",
  },

  // =======================================================
  // TELUGU
  // =======================================================
  te: {
    home: "హోమ్",
    country: "దేశం",
    world: "ప్రపంచం",
    politics: "రాజకీయం",
    business: "వ్యాపారం",
    sports: "క్రీడలు",
    entertainment: "వినోదం",
    technology: "సాంకేతికత",
    education: "విద్య",
    video: "వీడియో",
    search: "వెతకండి",
    searchNews: "వార్తలను వెతకండి...",
    adminLogin: "అడ్మిన్ లాగిన్",
    tagline: "దేశ వార్త, దేశ స్వరం",
    topText: "ప్రతి ముఖ్యమైన వార్త మొదట",
    language: "భాష",

    viewAll: "అన్నీ చూడండి",
    live: "లైవ్",

    bigBreakingNews: "ముఖ్యమైన మరియు బ్రేకింగ్ వార్తలు",
    importantUpdate: "ముఖ్యమైన అప్‌డేట్",
    breakingNews: "బ్రేకింగ్ న్యూస్",

    videoNews: "వీడియో న్యూస్",
    latestVideos: "తాజా వీడియోలు",
    videosLoading: "వీడియోలు లోడ్ అవుతున్నాయి...",
    videoLoading: "వీడియోలు లోడ్ అవుతున్నాయి...",
    retry: "మళ్లీ ప్రయత్నించండి",
    videoLoadFailed: "వీడియో లోడ్ కాలేదు.",
    browserVideoSupport:
      "మీ బ్రౌజర్ వీడియో ప్లేబ్యాక్‌కు మద్దతు ఇవ్వదు.",
    latestVideoNews: "తాజా వీడియో వార్తలు",
    noVideos: "ప్రస్తుతం వీడియోలు అందుబాటులో లేవు.",
    videoAdminMessage:
      "Admin Media Library లో అప్లోడ్ చేసిన వీడియోలు ఇక్కడ కనిపిస్తాయి.",
    videoApiError: "వీడియోలు లోడ్ కాలేదు.",

    featuredStories: "ఫీచర్డ్ స్టోరీస్",
    stories: "స్టోరీస్",
    featuredLoading: "ఫీచర్డ్ స్టోరీస్ లోడ్ అవుతున్నాయి...",
    featured: "ఫీచర్డ్",
    topStory: "ముఖ్య వార్త",
    readFullStory: "పూర్తి వార్త చదవండి",
    readFullNews: "పూర్తి వార్త చదవండి",
    noFeaturedNews: "ప్రస్తుతం ఫీచర్డ్ న్యూస్ అందుబాటులో లేదు.",

    latestNews: "తాజా వార్తలు",
    latestNewsSubtitle: "దేశం మరియు ప్రపంచంలోని తాజా అప్‌డేట్లు",
    latestSubtitle: "దేశం మరియు ప్రపంచంలోని తాజా అప్‌డేట్లు",
    latestLoading: "తాజా వార్తలు లోడ్ అవుతున్నాయి...",
    news: "న్యూస్",
    readMoreNews: "మరిన్ని వార్తలు చదవండి",
    noLatestNews: "ప్రస్తుతం తాజా వార్తలు అందుబాటులో లేవు.",

    trendingNews: "ట్రెండింగ్ వార్తలు",
    trendingNewsDescription:
      "ఎక్కువగా చదవబడుతున్న ట్రెండింగ్ వార్తలు",
    trendingLoading: "ట్రెండింగ్ వార్తలు లోడ్ అవుతున్నాయి...",
    views: "వ్యూస్",
    noTrendingNews: "ప్రస్తుతం ట్రెండింగ్ న్యూస్ అందుబాటులో లేదు.",

    newsLoadError: "వార్తలు లోడ్ కాలేదు.",

    latestUpdate: "తాజా అప్‌డేట్",
  },

  // =======================================================
  // PUNJABI
  // =======================================================
  pa: {
    home: "ਹੋਮ",
    country: "ਦੇਸ਼",
    world: "ਦੁਨੀਆ",
    politics: "ਰਾਜਨੀਤੀ",
    business: "ਕਾਰੋਬਾਰ",
    sports: "ਖੇਡਾਂ",
    entertainment: "ਮਨੋਰੰਜਨ",
    technology: "ਟੈਕਨੋਲੋਜੀ",
    education: "ਸਿੱਖਿਆ",
    video: "ਵੀਡੀਓ",
    search: "ਖੋਜ",
    searchNews: "ਖ਼ਬਰਾਂ ਖੋਜੋ...",
    adminLogin: "ਐਡਮਿਨ ਲੌਗਇਨ",
    tagline: "ਦੇਸ਼ ਦੀ ਖ਼ਬਰ, ਦੇਸ਼ ਦੀ ਆਵਾਜ਼",
    topText: "ਹਰ ਮਹੱਤਵਪੂਰਨ ਖ਼ਬਰ ਸਭ ਤੋਂ ਪਹਿਲਾਂ",
    language: "ਭਾਸ਼ਾ",

    viewAll: "ਸਭ ਵੇਖੋ",
    live: "ਲਾਈਵ",

    bigBreakingNews: "ਵੱਡੀਆਂ ਅਤੇ ਬ੍ਰੇਕਿੰਗ ਖ਼ਬਰਾਂ",
    importantUpdate: "ਮਹੱਤਵਪੂਰਨ ਅਪਡੇਟ",
    breakingNews: "ਬ੍ਰੇਕਿੰਗ ਨਿਊਜ਼",

    videoNews: "ਵੀਡੀਓ ਨਿਊਜ਼",
    latestVideos: "ਤਾਜ਼ਾ ਵੀਡੀਓ",
    videosLoading: "ਵੀਡੀਓ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
    videoLoading: "ਵੀਡੀਓ ਲੋਡ ਹੋ ਰਹੇ ਹਨ...",
    retry: "ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ",
    videoLoadFailed: "ਵੀਡੀਓ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕਿਆ।",
    browserVideoSupport:
      "ਤੁਹਾਡਾ ਬ੍ਰਾਊਜ਼ਰ ਵੀਡੀਓ ਪਲੇਬੈਕ ਨੂੰ ਸਪੋਰਟ ਨਹੀਂ ਕਰਦਾ।",
    latestVideoNews: "ਤਾਜ਼ਾ ਵੀਡੀਓ ਖ਼ਬਰਾਂ",
    noVideos: "ਇਸ ਸਮੇਂ ਕੋਈ ਵੀਡੀਓ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",
    videoAdminMessage:
      "Admin Media Library ਵਿੱਚ ਅਪਲੋਡ ਕੀਤੇ ਵੀਡੀਓ ਇੱਥੇ ਦਿਖਾਈ ਦੇਣਗੇ।",
    videoApiError: "ਵੀਡੀਓ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੇ।",

    featuredStories: "ਫੀਚਰਡ ਸਟੋਰੀਜ਼",
    stories: "ਸਟੋਰੀਜ਼",
    featuredLoading: "ਫੀਚਰਡ ਸਟੋਰੀਜ਼ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...",
    featured: "ਫੀਚਰਡ",
    topStory: "ਮੁੱਖ ਖ਼ਬਰ",
    readFullStory: "ਪੂਰੀ ਖ਼ਬਰ ਪੜ੍ਹੋ",
    readFullNews: "ਪੂਰੀ ਖ਼ਬਰ ਪੜ੍ਹੋ",
    noFeaturedNews: "ਇਸ ਸਮੇਂ ਕੋਈ Featured News ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",

    latestNews: "ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ",
    latestNewsSubtitle: "ਦੇਸ਼ ਅਤੇ ਦੁਨੀਆ ਦੀਆਂ ਨਵੀਆਂ ਅਪਡੇਟਾਂ",
    latestSubtitle: "ਦੇਸ਼ ਅਤੇ ਦੁਨੀਆ ਦੀਆਂ ਨਵੀਆਂ ਅਪਡੇਟਾਂ",
    latestLoading: "ਤਾਜ਼ਾ ਖ਼ਬਰਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...",
    news: "ਨਿਊਜ਼",
    readMoreNews: "ਹੋਰ ਖ਼ਬਰਾਂ ਪੜ੍ਹੋ",
    noLatestNews: "ਇਸ ਸਮੇਂ ਕੋਈ ਤਾਜ਼ਾ ਖ਼ਬਰ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",

    trendingNews: "ਟ੍ਰੈਂਡਿੰਗ ਖ਼ਬਰਾਂ",
    trendingNewsDescription:
      "ਸਭ ਤੋਂ ਵੱਧ ਪੜ੍ਹੀਆਂ ਜਾ ਰਹੀਆਂ ਟ੍ਰੈਂਡਿੰਗ ਖ਼ਬਰਾਂ",
    trendingLoading: "ਟ੍ਰੈਂਡਿੰਗ ਖ਼ਬਰਾਂ ਲੋਡ ਹੋ ਰਹੀਆਂ ਹਨ...",
    views: "ਵਿਊਜ਼",
    noTrendingNews: "ਇਸ ਸਮੇਂ ਕੋਈ ਟ੍ਰੈਂਡਿੰਗ ਨਿਊਜ਼ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",

    newsLoadError: "ਖ਼ਬਰਾਂ ਲੋਡ ਨਹੀਂ ਹੋ ਸਕੀਆਂ।",

    latestUpdate: "ਤਾਜ਼ਾ ਅਪਡੇਟ",
  },

  // =======================================================
  // URDU
  // =======================================================
  ur: {
    home: "ہوم",
    country: "ملک",
    world: "دنیا",
    politics: "سیاست",
    business: "کاروبار",
    sports: "کھیل",
    entertainment: "تفریح",
    technology: "ٹیکنالوجی",
    education: "تعلیم",
    video: "ویڈیو",
    search: "تلاش",
    searchNews: "خبریں تلاش کریں...",
    adminLogin: "ایڈمن لاگ ان",
    tagline: "ملک کی خبر، ملک کی آواز",
    topText: "ہر اہم خبر سب سے پہلے",
    language: "زبان",

    viewAll: "سب دیکھیں",
    live: "لائیو",

    bigBreakingNews: "اہم اور بریکنگ خبریں",
    importantUpdate: "اہم اپڈیٹ",
    breakingNews: "بریکنگ نیوز",

    videoNews: "ویڈیو نیوز",
    latestVideos: "تازہ ویڈیوز",
    videosLoading: "ویڈیوز لوڈ ہو رہی ہیں...",
    videoLoading: "ویڈیوز لوڈ ہو رہی ہیں...",
    retry: "دوبارہ کوشش کریں",
    videoLoadFailed: "ویڈیو لوڈ نہیں ہو سکی۔",
    browserVideoSupport:
      "آپ کا براؤزر ویڈیو پلے بیک کو سپورٹ نہیں کرتا۔",
    latestVideoNews: "تازہ ویڈیو خبریں",
    noVideos: "اس وقت کوئی ویڈیو دستیاب نہیں ہے۔",
    videoAdminMessage:
      "Admin Media Library میں اپلوڈ کی گئی ویڈیوز یہاں نظر آئیں گی۔",
    videoApiError: "ویڈیوز لوڈ نہیں ہو سکیں۔",

    featuredStories: "نمایاں خبریں",
    stories: "خبریں",
    featuredLoading: "نمایاں خبریں لوڈ ہو رہی ہیں...",
    featured: "نمایاں",
    topStory: "اہم خبر",
    readFullStory: "مکمل خبر پڑھیں",
    readFullNews: "مکمل خبر پڑھیں",
    noFeaturedNews: "اس وقت کوئی نمایاں خبر دستیاب نہیں ہے۔",

    latestNews: "تازہ خبریں",
    latestNewsSubtitle: "ملک اور دنیا کی تازہ ترین اپڈیٹس",
    latestSubtitle: "ملک اور دنیا کی تازہ ترین اپڈیٹس",
    latestLoading: "تازہ خبریں لوڈ ہو رہی ہیں...",
    news: "نیوز",
    readMoreNews: "مزید خبریں پڑھیں",
    noLatestNews: "اس وقت کوئی تازہ خبر دستیاب نہیں ہے۔",

    trendingNews: "ٹرینڈنگ خبریں",
    trendingNewsDescription:
      "سب سے زیادہ پڑھی جانے والی ٹرینڈنگ خبریں",
    trendingLoading: "ٹرینڈنگ خبریں لوڈ ہو رہی ہیں...",
    views: "ویوز",
    noTrendingNews: "اس وقت کوئی ٹرینڈنگ خبر دستیاب نہیں ہے۔",

    newsLoadError: "خبریں لوڈ نہیں ہو سکیں۔",

    latestUpdate: "تازہ ترین اپڈیٹ",
  },

  // =======================================================
  // ODIA
  // =======================================================
  or: {
    home: "ହୋମ",
    country: "ଦେଶ",
    world: "ବିଶ୍ୱ",
    politics: "ରାଜନୀତି",
    business: "ବ୍ୟବସାୟ",
    sports: "କ୍ରୀଡା",
    entertainment: "ମନୋରଞ୍ଜନ",
    technology: "ପ୍ରଯୁକ୍ତି",
    education: "ଶିକ୍ଷା",
    video: "ଭିଡିଓ",
    search: "ସନ୍ଧାନ",
    searchNews: "ଖବର ଖୋଜନ୍ତୁ...",
    adminLogin: "ଆଡମିନ ଲଗଇନ",
    tagline: "ଦେଶର ଖବର, ଦେଶର ସ୍ୱର",
    topText: "ପ୍ରତ୍ୟେକ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଖବର ପ୍ରଥମେ",
    language: "ଭାଷା",

    viewAll: "ସବୁ ଦେଖନ୍ତୁ",
    live: "ଲାଇଭ୍",

    bigBreakingNews: "ବଡ଼ ଏବଂ ବ୍ରେକିଂ ଖବର",
    importantUpdate: "ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ ଅପଡେଟ୍",
    breakingNews: "ବ୍ରେକିଂ ନ୍ୟୁଜ୍",

    videoNews: "ଭିଡିଓ ନ୍ୟୁଜ୍",
    latestVideos: "ସର୍ବଶେଷ ଭିଡିଓ",
    videosLoading: "ଭିଡିଓ ଲୋଡ୍ ହେଉଛି...",
    videoLoading: "ଭିଡିଓ ଲୋଡ୍ ହେଉଛି...",
    retry: "ପୁଣି ଚେଷ୍ଟା କରନ୍ତୁ",
    videoLoadFailed: "ଭିଡିଓ ଲୋଡ୍ ହୋଇପାରିଲା ନାହିଁ।",
    browserVideoSupport:
      "ଆପଣଙ୍କ ବ୍ରାଉଜର୍ ଭିଡିଓ ପ୍ଲେବ୍ୟାକ୍ ସମର୍ଥନ କରେ ନାହିଁ।",
    latestVideoNews: "ସର୍ବଶେଷ ଭିଡିଓ ଖବର",
    noVideos: "ବର୍ତ୍ତମାନ କୌଣସି ଭିଡିଓ ଉପଲବ୍ଧ ନାହିଁ।",
    videoAdminMessage:
      "Admin Media Library ରେ ଅପଲୋଡ୍ କରାଯାଇଥିବା ଭିଡିଓ ଏଠାରେ ଦେଖାଯିବ।",
    videoApiError: "ଭିଡିଓ ଲୋଡ୍ ହୋଇପାରିଲା ନାହିଁ।",

    featuredStories: "ଫିଚର୍ଡ ଷ୍ଟୋରି",
    stories: "ଷ୍ଟୋରି",
    featuredLoading: "ଫିଚର୍ଡ ଷ୍ଟୋରି ଲୋଡ୍ ହେଉଛି...",
    featured: "ଫିଚର୍ଡ",
    topStory: "ମୁଖ୍ୟ ଖବର",
    readFullStory: "ସମ୍ପୂର୍ଣ୍ଣ ଖବର ପଢନ୍ତୁ",
    readFullNews: "ସମ୍ପୂର୍ଣ୍ଣ ଖବର ପଢନ୍ତୁ",
    noFeaturedNews:
      "ବର୍ତ୍ତମାନ କୌଣସି Featured News ଉପଲବ୍ଧ ନାହିଁ।",

    latestNews: "ସର୍ବଶେଷ ଖବର",
    latestNewsSubtitle: "ଦେଶ ଏବଂ ବିଶ୍ୱର ନୂତନ ଅପଡେଟ୍",
    latestSubtitle: "ଦେଶ ଏବଂ ବିଶ୍ୱର ନୂତନ ଅପଡେଟ୍",
    latestLoading: "ସର୍ବଶେଷ ଖବର ଲୋଡ୍ ହେଉଛି...",
    news: "ନ୍ୟୁଜ୍",
    readMoreNews: "ଅଧିକ ଖବର ପଢନ୍ତୁ",
    noLatestNews: "ବର୍ତ୍ତମାନ କୌଣସି ସର୍ବଶେଷ ଖବର ନାହିଁ।",

    trendingNews: "ଟ୍ରେଣ୍ଡିଂ ଖବର",
    trendingNewsDescription:
      "ସର୍ବାଧିକ ପଢ଼ାଯାଉଥିବା ଟ୍ରେଣ୍ଡିଂ ଖବର",
    trendingLoading: "ଟ୍ରେଣ୍ଡିଂ ଖବର ଲୋଡ୍ ହେଉଛି...",
    views: "ଭ୍ୟୁ",
    noTrendingNews:
      "ବର୍ତ୍ତମାନ କୌଣସି ଟ୍ରେଣ୍ଡିଂ ନ୍ୟୁଜ୍ ନାହିଁ।",

    newsLoadError: "ଖବର ଲୋଡ୍ ହୋଇପାରିଲା ନାହିଁ।",

    latestUpdate: "ସର୍ବଶେଷ ଅପଡେଟ୍",
  },
};

// =========================================================
// AVAILABLE LANGUAGES
// =========================================================

const languages = [
  { code: "hi", name: "हिन्दी", flag: "🇮🇳" },
  { code: "en", name: "English", flag: "🇬🇧" },
  { code: "bn", name: "বাংলা", flag: "🇮🇳" },
  { code: "mr", name: "मराठी", flag: "🇮🇳" },
  { code: "gu", name: "ગુજરાતી", flag: "🇮🇳" },
  { code: "ta", name: "தமிழ்", flag: "🇮🇳" },
  { code: "te", name: "తెలుగు", flag: "🇮🇳" },
  { code: "pa", name: "ਪੰਜਾਬੀ", flag: "🇮🇳" },
  { code: "ur", name: "اردو", flag: "🇮🇳" },
  { code: "or", name: "ଓଡ଼ିଆ", flag: "🇮🇳" },
];

// =========================================================
// LANGUAGE PROVIDER
// =========================================================

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("hi");

  useEffect(() => {
    const savedLanguage =
      localStorage.getItem("website_language");

    if (
      savedLanguage &&
      translations[savedLanguage]
    ) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage) => {
    if (!translations[newLanguage]) {
      return;
    }

    setLanguage(newLanguage);

    localStorage.setItem(
      "website_language",
      newLanguage
    );
  };

  useEffect(() => {
    document.documentElement.lang = language;

    document.documentElement.dir =
      language === "ur"
        ? "rtl"
        : "ltr";
  }, [language]);

  const t = (key) => {
    return (
      translations[language]?.[key] ||
      translations.hi?.[key] ||
      key
    );
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        changeLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (!context) {
    throw new Error(
      "useLanguage must be used inside LanguageProvider"
    );
  }

  return context;
}

export { languages };