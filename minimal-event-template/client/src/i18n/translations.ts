export type Language = 'zh' | 'en';

export const translations: Record<Language, Record<string, any>> = {
  zh: {
    // 導航欄
    nav: {
      home: '首頁',
      about: '關於我們',
      programs: '課程介紹',
      reviews: '學員評價',
      booking: '預約試堂',
      locations: '分店位置',
      faq: '常見問題',
    },
    
    // Hero
    hero: {
      title: 'WOW FITNESS',
      subtitle: '一對一私人教練 | 度身訂造課程 | 飲食建議支援',
      ladies: '女性專屬健身空間',
      ladiesEn: 'Ladies Only Fitness Centre',
      locations: '中環 | 銅鑼灣* | 旺角* | 尖沙咀 | 觀塘* | 荃灣*',
      locationsEn: 'Central | Causeway Bay* | Mong Kok* | Tsim Sha Tsui | Kwun Tong* | Tsuen Wan*',
      description: '專為女性打造的舒適健身環境，提供專業一對一私人教練服務。每位學員都享有度身訂造的訓練計劃及個人化飲食建議，助您更快更有效地達成健身目標。',
      note: '* 標示為 設有女性專屬區域 分店',
      ctaBooking: '立即預約試堂',
      ctaLearn: '了解更多',
      badge1: '✓ 只設一對一私人教練',
      badge2: '✓ 無月費 無會員制',
      badge3: '✓ 高度私隱保障',
    },
    
    // 服務特色
    features: {
      personal: '一對一指導',
      personalEn: 'Personal Training',
      custom: '度身訂造',
      customEn: 'Customized Programs',
      nutrition: '飲食建議',
      nutritionEn: 'Nutrition Guidance',
      ladies: '女性專屬',
      ladiesEn: 'Ladies Only',
      noFee: '無月費 無會員制',
      noFeeEn: 'No Monthly Fee',
    },
    
    // 關於我們
    about: {
      subtitle: '關於 WOW FITNESS',
      subtitleEn: 'About Us',
      title: '為什麼選擇我們？',
      description: 'WOW FITNESS 是香港領先的女性專屬健身中心，專注於提供一對一私人教練服務。我們相信，專業的個人化指導配合度身訂造的訓練計劃及飲食建議，才能真正幫助每位女性達成健康與美麗的目標。在這裡，您不只是一個會員編號，而是我們用心照顧的每一位學員。',
      service1: {
        title: '一對一私人教練指導',
        desc: '每位學員配備專屬教練，根據個人體質、目標和進度，提供專業的訓練指導。確保每個動作都正確執行，最大化訓練效果，同時避免運動傷害。',
      },
      service2: {
        title: '度身訂造專屬課程',
        desc: '沒有千篇一律的訓練計劃。我們會根據您的健身目標、身體狀況、時間安排，為您量身打造最適合的訓練方案。定期評估進度並調整計劃，確保持續進步。',
      },
      service3: {
        title: '個人化飲食建議支援',
        desc: '運動配合正確飲食才能事半功倍。專業教練會根據您的訓練目標，提供實用的飲食建議和營養指導，教您如何吃得健康又有效，讓訓練成果更顯著。',
      },
      uniqueTitle: '✨ 獨特優勢：只設一對一私人教練 ✨',
      uniqueDesc: '我們<strong>不提供月費會籍或團體課程</strong>，只專注於<strong>一對一私人教練服務</strong>。這意味著您享有更高的<strong>私隱度</strong>、更專注的指導、更靈活的時間安排，按需預約，更符合您的生活節奏。',
    },
    
    // 成就數據
    stats: {
      subtitle: '我們的成就',
      subtitleEn: 'Our Achievements',
      title: '值得信賴的健身夥伴',
      description: '多年來，WOW FITNESS 致力於為香港女性提供最優質的健身服務。我們的專業團隊、完善設施及多元化課程，已幫助數千位會員達成健康目標，成為香港最受歡迎的女性專屬健身中心之一。',
      members: '滿意會員',
      membersEn: 'Happy Members',
      locations: '分店位置',
      locationsEn: 'Locations',
      trainers: '專業教練',
      trainersEn: 'Professional Trainers',
      experience: '年度經驗',
      experienceEn: 'Years Experience',
    },
    
    // 課程
    programs: {
      subtitle: '專業課程',
      subtitleEn: 'Our Programs',
      title: '多元化健身課程',
      description: '針對不同客戶的需要，提供多樣化、實效性強的健身訓練方案，結合專業教練指導與飲食支援，助您更快見效。',
      features: '課程特色：',
    },
    
    // 學員評價
    reviews: {
      subtitle: '學員評價',
      subtitleEn: 'Client Reviews',
      title: '真實學員分享',
      description: '聽聽我們學員的真實心聲，了解 WOW FITNESS 如何幫助她們達成健身目標',
      viewMore: '查看更多 Google 評論',
    },
    
    // 社交平台
    social: {
      subtitle: '社交平台',
      subtitleEn: 'Social Media',
      title: '追蹤我們的最新動態',
      description: '在社交平台上與我們互動，獲取最新健身資訊、學員成功故事及限時優惠',
      instagram: {
        title: 'Instagram',
        handle: '@wowfitness_2014',
        desc: '每日更新學員訓練花絮、健身小貼士、營養知識及勵志故事',
        feature1: '學員成功轉變故事',
        feature2: '每日健身動作教學',
        feature3: '健康飲食分享',
        feature4: '限時優惠及活動資訊',
        cta: '追蹤 Instagram',
      },
      facebook: {
        title: 'Facebook',
        handle: 'WOW FITNESS HK',
        desc: '定期發布健身知識文章、課程資訊、學員分享及最新優惠',
        feature1: '專業健身知識文章',
        feature2: '課程及活動相簿',
        feature3: '學員真實評價分享',
        feature4: '最新課程及優惠公告',
        cta: '讚好 Facebook 專頁',
      },
      footer: '追蹤我們的社交平台，加入 WOW FITNESS 大家庭，一起邁向健康美麗的人生！',
    },
    
    // 預約試堂
    booking: {
      subtitle: '預約試堂',
      subtitleEn: 'Book a Trial',
      title: '立即預約免費試堂',
      description: '體驗專業的一對一私人教練課程，讓我們幫助您開啟健康美麗的旅程',
      form: {
        name: '姓名',
        namePlaceholder: '請輸入您的姓名',
        phone: '電話',
        phonePlaceholder: '請輸入您的電話號碼',
        email: '電郵（選填）',
        emailPlaceholder: '請輸入您的電郵地址',
        location: '選擇分店',
        locationPlaceholder: '請選擇您方便的分店',
        program: '感興趣的課程',
        programPlaceholder: '請選擇您感興趣的課程',
        date: '希望試堂日期（選填）',
        message: '其他需求（選填）',
        messagePlaceholder: '如有其他需求或問題，請告訴我們',
        submit: '提交預約',
        required: '請填寫所有必填欄位',
        success: '預約成功！我們會盡快聯絡您確認試堂時間。',
      },
      process: {
        title: '試堂流程',
        step1: {
          title: '提交預約',
          desc: '填寫預約表格，選擇您感興趣的課程和分店',
        },
        step2: {
          title: '確認時間',
          desc: '我們的團隊會在 24 小時內聯絡您確認試堂時間',
        },
        step3: {
          title: '體驗課程',
          desc: '專業教練一對一指導，體驗約 60 分鐘',
        },
        step4: {
          title: '制定計劃',
          desc: '根據您的目標，為您量身訂製訓練方案',
        },
      },
      contact: {
        title: '聯絡我們',
        whatsapp: 'WhatsApp 查詢',
        email: 'wowfitnesshk@gmail.com',
      },
    },
    
    // 分店位置
    locations: {
      subtitle: '分店位置',
      subtitleEn: 'Our Locations',
      title: '六大分店 遍佈港九新界',
      description: '選擇最方便您的分店，開始您的健身之旅',
      regions: {
        hk: '港島區',
        kln: '九龍區',
        nt: '新界區',
      },
      hours: '營業時間',
      hoursValue: '星期一至日 7:00 - 22:00',
      ladiesOnly: 'Ladies Only',
    },
    
    // FAQ
    faq: {
      subtitle: '常見問題',
      subtitleEn: 'FAQ',
      title: '常見問題解答',
      description: '以下是學員最常詢問的問題，如有其他疑問歡迎聯絡我們',
    },
    
    // Footer
    footer: {
      description: '香港領先的女性專屬健身中心，提供專業一對一私人教練服務、度身訂造訓練計劃及飲食建議支援。',
      quickLinks: '快速連結',
      contact: '聯絡資訊',
      follow: '追蹤我們',
      rights: '© 2024 WOW FITNESS. 版權所有',
    },
  },
  
  en: {
    // Navigation
    nav: {
      home: 'Home',
      about: 'About Us',
      programs: 'Programs',
      reviews: 'Reviews',
      booking: 'Book Trial',
      locations: 'Locations',
      faq: 'FAQ',
    },
    
    // Hero
    hero: {
      title: 'WOW FITNESS',
      subtitle: 'Personal Training | Customized Programs | Nutrition Guidance',
      ladies: 'Ladies Only Fitness Centre',
      ladiesEn: 'Women Exclusive Space',
      locations: 'Central | Causeway Bay* | Mong Kok* | TST | Kwun Tong* | Tsuen Wan*',
      locationsEn: '* Ladies Only Branches',
      description: 'A comfortable fitness environment designed exclusively for women, offering professional one-on-one personal training services. Every member enjoys customized training plans and personalized nutrition guidance to help you achieve your fitness goals faster and more effectively.',
      note: '* Ladies Only Branches',
      ctaBooking: 'Book a Trial',
      ctaLearn: 'Learn More',
      badge1: '✓ One-on-One Personal Training Only',
      badge2: '✓ No Monthly Fee, No Membership',
      badge3: '✓ High Privacy Protection',
    },
    
    // Features
    features: {
      personal: 'Personal Training',
      personalEn: 'One-on-One Coaching',
      custom: 'Customized Programs',
      customEn: 'Tailored Plans',
      nutrition: 'Nutrition Guidance',
      nutritionEn: 'Diet Support',
      ladies: 'Ladies Only',
      ladiesEn: 'Women Exclusive',
      noFee: 'No Monthly Fee',
      noFeeEn: 'No Membership',
    },
    
    // About
    about: {
      subtitle: 'About WOW FITNESS',
      subtitleEn: 'Who We Are',
      title: 'Why Choose Us?',
      description: 'WOW FITNESS is Hong Kong\'s leading women-only fitness center, specializing in one-on-one personal training services. We believe that professional personalized guidance combined with customized training plans and nutrition advice can truly help every woman achieve health and beauty goals. Here, you are not just a membership number, but an individual we care for.',
      service1: {
        title: 'One-on-One Personal Training',
        desc: 'Each member is assigned a dedicated trainer who provides professional training guidance based on individual physique, goals, and progress. Ensure every movement is performed correctly to maximize training effectiveness while preventing injuries.',
      },
      service2: {
        title: 'Customized Training Programs',
        desc: 'No one-size-fits-all training plans. We create the most suitable training program based on your fitness goals, physical condition, and schedule. Regular progress assessments and plan adjustments ensure continuous improvement.',
      },
      service3: {
        title: 'Personalized Nutrition Support',
        desc: 'Exercise combined with proper nutrition is the key to success. Our professional trainers provide practical dietary advice and nutritional guidance based on your training goals, teaching you how to eat healthily and effectively for better results.',
      },
      uniqueTitle: '✨ Unique Advantage: One-on-One Personal Training Only ✨',
      uniqueDesc: 'We <strong>do not offer monthly memberships or group classes</strong>, focusing exclusively on <strong>one-on-one personal training services</strong>. This means you enjoy higher <strong>privacy</strong>, more focused guidance, more flexible scheduling, and book on demand to better fit your lifestyle.',
    },
    
    // Stats
    stats: {
      subtitle: 'Our Achievements',
      subtitleEn: 'Track Record',
      title: 'Your Trusted Fitness Partner',
      description: 'Over the years, WOW FITNESS has been committed to providing the highest quality fitness services for women in Hong Kong. Our professional team, comprehensive facilities, and diverse programs have helped thousands of members achieve their health goals, becoming one of Hong Kong\'s most popular women-only fitness centers.',
      members: 'Happy Members',
      membersEn: 'Satisfied Clients',
      locations: 'Locations',
      locationsEn: 'Branches',
      trainers: 'Professional Trainers',
      trainersEn: 'Expert Coaches',
      experience: 'Years Experience',
      experienceEn: 'Years of Excellence',
    },
    
    // Programs
    programs: {
      subtitle: 'Our Programs',
      subtitleEn: 'Training Options',
      title: 'Diverse Fitness Programs',
      description: 'Tailored to different client needs, we offer diverse and effective fitness training programs, combined with professional coaching and nutrition support to help you see results faster.',
      features: 'Program Features:',
    },
    
    // Reviews
    reviews: {
      subtitle: 'Client Reviews',
      subtitleEn: 'Testimonials',
      title: 'Real Client Stories',
      description: 'Hear from our clients about how WOW FITNESS helped them achieve their fitness goals',
      viewMore: 'View More Google Reviews',
    },
    
    // Social
    social: {
      subtitle: 'Social Media',
      subtitleEn: 'Follow Us',
      title: 'Follow Our Latest Updates',
      description: 'Connect with us on social media for the latest fitness tips, success stories, and exclusive offers',
      instagram: {
        title: 'Instagram',
        handle: '@wowfitness_2014',
        desc: 'Daily updates on client training, fitness tips, nutrition knowledge, and inspiring stories',
        feature1: 'Client Transformation Stories',
        feature2: 'Daily Exercise Tutorials',
        feature3: 'Healthy Eating Tips',
        feature4: 'Limited Time Offers & Events',
        cta: 'Follow Instagram',
      },
      facebook: {
        title: 'Facebook',
        handle: 'WOW FITNESS HK',
        desc: 'Regular posts on fitness knowledge, program info, client shares, and latest offers',
        feature1: 'Professional Fitness Articles',
        feature2: 'Program & Event Albums',
        feature3: 'Real Client Reviews',
        feature4: 'Latest Programs & Offers',
        cta: 'Like Facebook Page',
      },
      footer: 'Follow us on social media and join the WOW FITNESS family on your journey to health and beauty!',
    },
    
    // Booking
    booking: {
      subtitle: 'Book a Trial',
      subtitleEn: 'Free Trial Session',
      title: 'Book Your Free Trial Now',
      description: 'Experience professional one-on-one personal training and let us help you start your journey to health and beauty',
      form: {
        name: 'Name',
        namePlaceholder: 'Enter your name',
        phone: 'Phone',
        phonePlaceholder: 'Enter your phone number',
        email: 'Email (Optional)',
        emailPlaceholder: 'Enter your email address',
        location: 'Select Location',
        locationPlaceholder: 'Choose your preferred location',
        program: 'Program of Interest',
        programPlaceholder: 'Choose your program of interest',
        date: 'Preferred Trial Date (Optional)',
        message: 'Additional Requirements (Optional)',
        messagePlaceholder: 'Let us know if you have any special requirements',
        submit: 'Submit Booking',
        required: 'Please fill in all required fields',
        success: 'Booking successful! We will contact you soon to confirm your trial session.',
      },
      process: {
        title: 'Trial Process',
        step1: {
          title: 'Submit Booking',
          desc: 'Fill out the form and select your program and location',
        },
        step2: {
          title: 'Confirm Time',
          desc: 'Our team will contact you within 24 hours to confirm',
        },
        step3: {
          title: 'Experience Session',
          desc: 'One-on-one coaching session, approximately 60 minutes',
        },
        step4: {
          title: 'Create Plan',
          desc: 'Customized training program based on your goals',
        },
      },
      contact: {
        title: 'Contact Us',
        whatsapp: 'WhatsApp Inquiry',
        email: 'wowfitnesshk@gmail.com',
      },
    },
    
    // Locations
    locations: {
      subtitle: 'Our Locations',
      subtitleEn: 'Find Us',
      title: 'Six Locations Across Hong Kong',
      description: 'Choose the most convenient location to start your fitness journey',
      regions: {
        hk: 'Hong Kong Island',
        kln: 'Kowloon',
        nt: 'New Territories',
      },
      hours: 'Opening Hours',
      hoursValue: 'Mon - Sun 7:00 - 22:00',
      ladiesOnly: 'Ladies Only',
    },
    
    // FAQ
    faq: {
      subtitle: 'FAQ',
      subtitleEn: 'Frequently Asked Questions',
      title: 'Frequently Asked Questions',
      description: 'Common questions from our clients. Feel free to contact us for more information',
    },
    
    // Footer
    footer: {
      description: 'Hong Kong\'s leading women-only fitness center, offering professional one-on-one personal training, customized training plans, and nutrition guidance.',
      quickLinks: 'Quick Links',
      contact: 'Contact Info',
      follow: 'Follow Us',
      rights: '© 2024 WOW FITNESS. All Rights Reserved',
    },
  },
};

