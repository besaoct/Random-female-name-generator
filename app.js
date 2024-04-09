
// ⁡⁢⁣⁣Random Islamic NAME(female) GENERATOR⁡ 😎

const Fname = {
    1: ["Ala", "Aminah", "Abidah", "Adibah", "Adilah", "Afaf", "Aisha", "Aliyah", "Amal", "Amani", "Aminah", "Amirah", "Anisah", "Anjum", "Aqilah", "Areej", "Arwa", "Asilah", "Asimah", "Asiyah"],
    2: ["Badiah", "Badriyah", "Barakah", "Bashirah", "Basimah", "Basmah", "Bushra", "Buthaynah"],
    3: ["Dariya", "Deema", "Deena", "Dua", "Durra", "Durriya"],
    4: ["Faida", "Faiza", "Farah", "Fareeda", "Farha", "Farhana", "Farukh", "Fateen", "Fateema", "Fatimah", "Fayrooz", "Fazila", "Feryal", "Firdaws", "Fatima"],
    5: ["Ghada", "Ghaya"],
    6: ["Habibah", "Hadeel", "Hadiya", "Hadiyya", "Hala", "Hameeda", "Hamidah", "Hana", "Hanan", "Hanifah", "Hasanat", "Haseena", "Hiba", "Hiyam", "Huda", "Husna"],
    7: ["Ibtihaj", "Ibtisam", "Iffat", "Ilham", "Iman", "Inayat"],
    8: [ "Jameela", "Janan", "Jumana", "Jimima",, "Jaleela", "Jameela", "Jawhara", "Jannah", "Jawahir", "Jasmin", "Jumanah", "Juwairiya", "Juwayriya", "Jannat"],
    9: ["Kamila", "Kareema", "Kawkab", "Kawthar", "Khadeeja", "Khaleela", "Khalida", "Khawlah", "Khairunnisa", "Khayriyyah",],
    10: ["Labeeba", "Lama", "Lamees", "Lamya", "Lateefa", "Layla", "Lina", "Lubna", "Lulu"],
    11: ["Maha", "Mahasin", "Maisah", "Majeeda", "Majidah", "Malikah", "Manal", "Maram", "Mariyyah", "Maryam", "Masirah", "Maysara", "Maymuna", "Maysoon", "Muhayrah", "Muhsina", "Mujahida", "Mumina", "Muna", "Munirah", "Munyah"],
    12: ["Nabeeha", "Nabeela", "Nabiha", "Nahida", "Nahla", "Naila", "Naima", "Najda", "Najiha", "Najla", "Najma", "Najwa", "Nashwa", "Nasiha", "Nasreen", "Nawal", "Nima", "Nishat", "Noora", "Nuha"],
    13: ["Qamar", "Qaseema", "Qayima"],
    14: ["Rabab", "Rafeeda", "Raghad", "Raheema", "Raida", "Raifa", "Raisa", "Rajwa", "Rana", "Raneem", "Raqiyah", "Rasha", "Rasheeda", "Rasima", "Rayhana", "Rayya", "Raziya", "Reema", "Rizwana", "Ruwayda"],
    15: ["Saba", "Sabah", "Sabira", "Sadaf", "Safa", "Safiyyah", "Sahar", "Sajidah", "Sakeena", "Salma", "Salwa", "Samirah", "Samiyah", "Sana", "Sara", "Sayeeda", "Seema", "Sidrah", "Sufiya", "Suha", "Suhayla", "Sultana", "Sumayyah", "Sundus"],
    16: ["Shafea", "Shaheeda", "Shaheera", "Shakira", "Shameela", "Shameem", "Shamma", "Shareefa"],
    17: ["Taghreed", "Tahani",   "Tameema", "Tanweer",  "Tawfeeqa", "Thana", "Thurayya", "Tooba",  "Tasneem",  "Tasnim", "Taliba", "Tamara", "Talibah", "Tahira", "Tayyiba", "Tanzila"],
    18: ["Ulfah", "Uzma", "Uswa","Umaira", "Ulfat", "Umnia", "Ulfah",],
    19: ["Wadad", "Wafa", "Wajida", "Warda", "Waseema","Wasima"],
    20: ["Yamama", "Yameena", "Yasmeen", "Yumna", "Yusra", "Yesmina", "Yasmina"],
    21: ["Zafira", "Zaha", "Zahida", "Zahira", "Zahra", "Zakiyya", "Zarwa", "Zayba", "Zuha", "Zulaykha", "Zimima"]
};

  
 
  
const Lname = {

   1: ["Abdullah", "Ahmed", "Ali", "Aziz", "Amir",  "Alawi", "Amin", "Aref", "Ashraf", "Abdallah", "Akhtar", "Aqil", "Alavi", "Anwar", "Azeem", "Asghar", "Arif", "Aydin", "Abad", "Abbas", "Abbasi", "Abdalla",  "Abdella", "Abdelnour", "Abdelrahman", "Abdi", "Abdo", "Abdoo", "Abdou", "Abdul", "Abdulla", "Abed", "Abid", "Abood", "Aboud", "Abu", "Adel", "Afzal", "Agha", "Ahmad", "Ahmadi",  "Ahsan", "Akbar", "Akbari", "Akel",  "Akhter", "Akram", "Alam",   "Allam", "Allee", "Alli", "Ally", "Aly", "Aman", "Amara", "Amber", "Ameen", "Amen", "Amer", "Amini",   "Amiri", "Ammar", "Ansari", "Arafat",  "Arshad", "Asad",  "Aslam", "Asmar", "Assad", "Assaf", "Atallah", "Attar", "Awan", "Ayoob", "Ayoub", "Ayub", "Azad", "Azam", "Azer", "Azimi",  "Azizi", "Azzam", "Azzi",  
],
  
   2: ["Bashir", "Bilal","Basammah", "Baig", "Bukhari", "Basri", "Bakir", "Bahri", 
     "Babar", "Bhati", "Begum", "Bashar", "Bulbul", "Bashir", "Bilal", "Badiah", "Badriyah", "Barakat", "Bari", "Basha", "Bashara", "Basher", "Bashir", "Baten", "Bacchus", "Baccus", "Bacho", "Baddour", "Burki", "Badour", "Bagheri", "Bahri", "Baig", "Baksh", "Baluch", "Bangura"],
  
    3: ["Chaudhry", "Chowdhury", "Choudhury", "Can", "Chahine"],

    4: ["Dwan", "Dada", "Dajani", "Dallal", "Daoud", "Dar", "Darwish", "Dawood", "Diab", "Dib", "Din", "Doud"],

    5: ["Ebrahim", "Ebrahimi", "Edris", "Eid", "El-Sayed", "Elamin", "Elbaz", "Emami", "Fadel", "Fahmy", "Fahs", "Farag", "Farah", "Faraj", "Fares", "Farha", "Farhat", "Farid", "Faris", "Farman", "Farooq", "Farooqui", "Farra", "Farrah", "Farran", "Fawaz", "Fayad", "Firman"],
    6: ["Gaber", "Gad", "Galla", "Ghaffari", "Ghanem", "Ghani", "Ghattas", "Ghazal", "Ghazi", "Greiss", "Guler"],
    7: ["Habeeb", "Habib", "Habibi", "Hadi", "Hafeez", "Hai", "Haidar", "Haider", "Hakeem", "Hakim", "Halaby", "Halim", "Hallal", "Hamad", "Hamady", "Hamdan", "Hamed", "Hameed", "Hamid", "Hamidi", "Hammad", "Hammoud", "Hana", "Hanif", "Hannan", "Haq", "Haque", "Hares", "Hariri", "Harron", "Harroun", "Hasan", "Hasen", "Hashem", "Hashemi", "Hashim", "Hashmi", "Hassan", "Hassan", "Hassen", "Hatem", "Hoda", "Hoque", "Hosein", "Hossain", "Hosseini", "Huda", "Huq", "Husain", "Hussain", "Hussein"],
    8: ["Ibrahim", "Idris", "Imam", "Iman", "Iqbal", "Irani", "Ishak", "Ishmael", "Islam", "Ismael", "Ismail"],
    9: ["Jabara", "Jabbar", "Jabbour", "Jaber", "Jabour", "Jafari", "Jaffer", "Jafri", "Jalali", "Jalil", "Jama", "Jamail", "Jamal", "Jamil", "Jan", "Javed"],
    10: ["Kaba", "Kaber", "Kabir", "Kader", "Kaiser", "Kaleel", "Kalil", "Kamal", "Kamali", "Kamara", "Kamel", "Kanan", "Karam", "Karim", "Karimi", "Kassem", "Kazemi", "Kazi", "Kazmi", "Khalaf", "Khalid", "Khalifa", "Khalil", "Khalili", "Khan", "Khatib", "Khawaja", "Koroma"],
    11: ["Laham", "Latif", "Lodi", "Lone"],
    12: ["Madani", "Mady", "Mahdavi", "Mahdi", "Mahfouz", "Mahmood", "Mahmoud", "Mahmud", "Majeed", "Majid", "Malak", "Malek", "Malik", "Mannan", "Mansoor", "Mansour", "Mansouri", "Mansur", "Maroun", "Masood", "Masri", "Massoud", "Matar", "Matin", "Mattar", "Mattar", "Meer", "Meskin", "Miah", "Mian", "Mina", "Minhas", "Mir", "Mirza", "Mitri", "Moghaddam"],
    13: ["Mohamad", "Mohamed", "Mohammad", "Mohammadi", "Mohammed", "Mohiuddin", "Molla", "Momin", "Mona", "Morad", "Moradi", "Mostafa", "Mourad", "Mousa", "Moussa", "Moustafa", "Mowad", "Muhammad", "Muhammed", "Munir", "Murad", "Musa", "Mussa", "Mustafa"],
    14: ["Naderi", "Nagi", "Naim", "Naqvi", "Nasir", "Nasir", "Nasr", "Nasrallah", "Nasser", "Nassif", "Nawaz", "Nazar", "Nazir", "Neman", "Niazi", "Noor", "Noorani", "Noori", "Nour", "Nouri"],
    15: ["Obeid", "Odeh", "Omar", "Omer", "Othman", "Ozer"],
    16: ["Parsa", "Pasha", "Pashia", "Pirani", "Popal", "Pour"],
    17: ["Qadir", "Qasim", "Qazi", "Quadri", "Raad", "Rabbani", "Rad", "Radi", "Radwan", "Rafiq", "Rahaim", "Rahaman", "Rahim", "Rahimi", "Rahman", "Rahmani", "Rais", "Ramadan", "Ramin", "Rashed", "Rasheed", "Rashid", "Rassi", "Rasul", "Rauf", "Rayes", "Rehman", "Rehmann", "Reza", "Riaz", "Rizk"],
    18: ["Saab", "Saad", "Saade", "Saadeh", "Saah", "Saba", "Saber", "Sabet", "Sabir", "Sadek", "Sader", "Sadiq", "Sadri", "Saeed", "Safar", "Safi", "Sahli", "Saidi", "Sala", "Salaam", "Saladin", "Salah", "Salahuddin", "Salam", "Salama", "Salame", "Salameh", "Saleem", "Saleh", "Salehi", "Salek", "Salem", "Salih", "Salik", "Salim", "Salloum", "Salman", "Samaan", "Samad", "Samara", "Sami", "Samra", "Sani", "Sarah", "Sarwar", "Sattar", "Satter", "Sawaya", "Sayed", "Selim", "Semaan", "Sesay", "Shaban", "Shabazz", "Shad", "Shaer", "Shafi", "Shah", "Shahan", "Shaheed", "Shaheen", "Shahid", "Shahidi", "Shahin", "Shaikh", "Shaker", "Shakir", "Shakoor", "Sham", "Shams", "Sharaf", "Shareef", "Sharif", "Shariff", "Sharifi", "Shehadeh", "Shehata", "Sheikh", "Siddiqi", "Siddique", "Siddiqui", "Sinai", "Soliman", "Soltani", "Srour", "Sulaiman", "Suleiman", "Sultan", "Sultana", "Syed"],
    19: ["Tabatabai", "Tabet", "Taha", "Taheri", "Tahir", "Tamer", "Tariq", "Tawil", "Turay"],
    20: ["Uddin", "Ullah", "Usman", "Vaziri", "Vohra"],
    21: ["Wahab", "Wahba", "Waheed", "Wakim", "Wali"],
    22: ["Yacoub", "Yamin", "Yasin", "Yassin", "Younes", "Younis", "Yousef", "Yousif", "Youssef", "Yousuf", "Yusuf"],
    23: ["Zadeh", "Zafar", "Zaher", "Zahra", "Zaidi", "Zakaria", "Zaki"]
};


function generateName() {
    const nameElement = document.getElementById("rname"); // Define nameElement
    const RandomTerm = (obj) => {
        const keys = Object.keys(obj);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        const randomIndex = Math.floor(Math.random() * obj[randomKey].length);
        return obj[randomKey][randomIndex];
    };

    const FName = RandomTerm(Fname);
    const LName = RandomTerm(Lname);

    const genName = `🎉 ${FName} ${LName} ✨`;
    nameElement.textContent = genName;
    nameElement.style.opacity = 1;
    nameElement.style.transform = "translateY(-20%)"; // Initial position off-screen to the left

    // Apply animation by gradually moving the name from left to right
    nameElement.animate([
        { transform: "translateY(-20%)", opacity: 0 }, // Start position and opacity
        { transform: "translateY(0)", opacity: 1 } // End position and opacity
    ], {
        duration: 1000, // Animation duration in milliseconds
        easing: "ease-out" // Easing function
    });
}
