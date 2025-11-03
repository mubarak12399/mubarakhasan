// একটি সাধারণ JavaScript ফাংশন
console.log("পোর্টফোলিও ওয়েবসাইট লোড হয়েছে। JavaScript কাজ করছে!");

// ভবিষ্যতে এখানে আপনি রেসপনসিভ নেভিগেশন মেনু 
// বা স্ক্রল অ্যানিমেশন যুক্ত করতে পারেন।

// উদাহরণস্বরূপ: সব সেকশন এর আইডি নিতে পারেন
const sections = document.querySelectorAll('section');

// একটি সাধারণ ইন্টারঅ্যাকশন:
sections.forEach(section => {
    section.addEventListener('click', () => {
        console.log(`${section.id} সেকশনে ক্লিক করা হয়েছে!`);
    });
});