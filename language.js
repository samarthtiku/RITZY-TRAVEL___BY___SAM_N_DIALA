// language.js

function changeLanguage(lang) {
    // Define translation object for each language
    const translations = {
        'en': {
            'home': 'Home',
            'book': 'Book',
            'packages': 'Packages',
            'services': 'Services',
            'gallery': 'Gallery',
            'review': 'Review',
            'contact': 'Contact',
            'about_us': 'About Us',
            'branch_locations': 'Branch Locations',
            'quick_links': 'Quick Links',
            'follow_us': 'Follow Us',
            'created_by': 'Created by',
            'all_rights_reserved': 'All rights reserved!',
        },
        'ar': {
            'home': 'الرئيسية',
            'book': 'احجز',
            'packages': 'الباقات',
            'services': 'الخدمات',
            'gallery': 'المعرض',
            'review': 'التقييمات',
            'contact': 'اتصل بنا',
            'about_us': 'من نحن',
            'branch_locations': 'فروعنا',
            'quick_links': 'روابط سريعة',
            'follow_us': 'تابعنا',
            'created_by': 'تم إنشاء بواسطة',
            'all_rights_reserved': 'كل الحقوق محفوظة!',
        },
        'fr': {
            'home': 'Accueil',
            'book': 'Réserver',
            'packages': 'Forfaits',
            'services': 'Services',
            'gallery': 'Galerie',
            'review': 'Avis',
            'contact': 'Contact',
            'about_us': 'À propos de nous',
            'branch_locations': 'Emplacements des succursales',
            'quick_links': 'Liens rapides',
            'follow_us': 'Suivez-nous',
            'created_by': 'Créé par',
            'all_rights_reserved': 'Tous droits réservés !',
        },
        'hi': {
            'home': 'घर',
            'book': 'बुक',
            'packages': 'पैकेजेस',
            'services': 'सेवाएं',
            'gallery': 'गैलरी',
            'review': 'समीक्षा',
            'contact': 'संपर्क',
            'about_us': 'हमारे बारे में',
            'branch_locations': 'शाखा स्थान',
            'quick_links': 'त्वरित लिंक्स',
            'follow_us': 'हमें फॉलो करें',
            'created_by': 'द्वारा बनाया गया',
            'all_rights_reserved': 'सभी अधिकार सुरक्षित हैं!',
        },
        'ja': {
            'home': 'ホーム',
            'book': '予約',
            'packages': 'パッケージ',
            'services': 'サービス',
            'gallery': 'ギャラリー',
            'review': 'レビュー',
            'contact': 'お問い合わせ',
            'about_us': '私たちについて',
            'branch_locations': '支店の場所',
            'quick_links': 'クイックリンク',
            'follow_us': 'フォローする',
            'created_by': '作成者',
            'all_rights_reserved': '全著作権所有！',
        }
    };

    // Get all elements with data-translate attribute
    const elements = document.querySelectorAll('[data-translate]');

    // Iterate through elements and set their text content based on the selected language
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}
