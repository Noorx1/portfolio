/*
 * Alle Texte der Website in drei Sprachen: de (Standard), en, ar.
 * Texte hier ändern, die Struktur (Schlüssel, Reihenfolge der Listen) beibehalten.
 * Jede Sprache muss dieselben Schlüssel und gleich lange Listen haben.
 */
window.I18N = {
  de: {
    navLabel:'Hauptnavigation', langLabel:'Sprache', menu:'Menü',
    nav:['Über mich','Projekte','Erfahrung','Skills','Kontakt'],
    name:'Mohamad Noor Ghazal', role:'Fachinformatiker · Linux, Netzwerk und Automatisierung · Oldenburg',
    h1a:'Ich entwickle Anwendungen, ', h1b:'betreibe Server', h1c:' und automatisiere Abläufe.',
    sub:'Fachinformatiker mit zwei IT-Ausbildungen und sechs Jahren Berufserfahrung. Ich betreibe eigene Linux-Server mit Docker, Firewall-Regeln, Backups und Monitoring, automatisiere mit PowerShell und analysiere Störungen in einer Plattform, die über 1.000 Unternehmen nutzen.',
    badge:'Verfügbar für eine Festanstellung in Vollzeit', statusA:'Vollzeit', statusB:'Eintritt nach einem Monat Kündigungsfrist', statusLine:'Vollzeit · Eintritt nach einem Monat Kündigungsfrist', location:'Oldenburg',
    ctaProjects:'Projekte ansehen', ctaContact:'Kontakt',
    m:['Jahre Berufserfahrung','abgeschlossene IT-Ausbildungen','Unternehmen nutzen die Plattform, die ich betreue','Monate Migrationsprojekt des gesamten CMS'],
    aboutEyebrow:'Über mich', aboutTitle:'Netzwerk, Server, Anwendung und Betrieb',
    aboutText:'Ich bin Fachinformatiker aus Oldenburg mit zwei abgeschlossenen IT-Ausbildungen. In der Ausbildung zum staatlich geprüften Informationstechnischen Assistenten lagen meine Schwerpunkte auf Netzwerktechnik, Windows Server und Linux. Seit 2020 arbeite ich bei der Green Solutions Software GmbH, heute als Full-Stack-Webentwickler. Dort analysiere ich Störungen im Live-System, arbeite im 1st- und 2nd-Level-Support mit und dokumentiere neue Funktionen. Nebenberuflich betreibe ich einen eigenen Linux-Server. Infrastruktur, Netzwerk und IT-Sicherheit interessieren mich besonders.',
    chain:['Netzwerk','Server','Anwendung','Automatisierung'],
    projectsEyebrow:'Projekte', projectsTitle:'Ausgewählte Projekte',
    p1Title:'NG Automobile: CMS und eigener Linux-Server', p1Kind:'Nebenberufliches Projekt',
    p1Desc:'Für einen Gebrauchtwagenhändler betreibe ich einen eigenen Linux-Server bei Netcup: Verwaltung per SSH, Firewall-Regeln, Anwendungen in Docker-Containern, ein Backup-System, ein Mailserver und Monitoring mit Grafana. Darauf läuft ein komplettes CMS, das ich selbst programmiert habe, mit REST-API in C#, PostgreSQL, Next.js und Angular. Eine Schnittstelle zu mobile.de hält den Fahrzeugbestand automatisch aktuell.',
    p2Title:'PowerShell-Automatisierung mit KI-Agenten', p2Kind:'Eigenes Tool', p2Desc:'Wiederkehrende Aufgaben automatisiere ich mit PowerShell. Dafür habe ich ein eigenes Programm gebaut, das KI-Agenten (Claude Code) startet und steuert. Sie listen Pull Requests auf, analysieren sie und liefern mir eine Zusammenfassung.',
    p3Title:'Heimnetz und Hardware', p3Kind:'Privat', p3Desc:'Raspberry Pi mit Pi-hole als DNS-Filter im Heimnetz. Ein ESP32 mit Infrarot-Sender steuert alte Lautsprecher über eine Weboberfläche im lokalen Netz. Ein ESP32 mit NFC-Leser startet Musik über Alexa und Spotify. Dazu virtuelle Testsysteme mit Kali Linux.',
    details:'Details ansehen', close:'Schließen', back:'Zurück zu den Projekten',
    dVisitors:'Besucher', dVisitorsS:'Browser', dWeb:'Öffentliche Website', dApi:'REST-API · C#', dDb:'Datenbank', dServer:'Docker · Netcup Linux', dExtS:'Bestand-Abgleich', dMon:'Monitoring', firewall:'Firewall', backups:'Backups', mail:'Mailserver',
    f:[['PowerShell-Tool','startet und steuert'],['KI-Agenten','Claude Code mit eigenen Skills'],['Pull Requests','auflisten und analysieren'],['Zusammenfassung','Überblick für mich']],
    hInternet:'Internet', hNet:'Heimnetz',
    h:[['Raspberry Pi','Pi-hole · DNS-Filter'],['ESP32 · Infrarot','steuert Lautsprecher per Web'],['ESP32 · NFC','Musik über Alexa und Spotify'],['Testsysteme','Kali Linux · VMs']],
    archAria:'Architektur von NG Automobile: Besucher, Next.js, ASP.NET Core API, PostgreSQL in Docker auf Netcup Linux, Abgleich mit mobile.de, Monitoring mit Grafana',
    flowAria:'Ablauf: PowerShell-Tool, KI-Agenten, Pull Requests, Zusammenfassung', homeAria:'Netzwerkkarte des Heimnetzes: Raspberry Pi, zwei ESP32, Testsysteme',
    expEyebrow:'Erfahrung', expTitle:'Berufserfahrung und Werdegang',
    jobs:[
      ['seit 08/2023','Full-Stack-Webentwickler','Green Solutions Software GmbH, Bad Zwischenahn',[
        'Fehleranalyse und Störungsbehebung im Live-System, Mitarbeit im 1st- und 2nd-Level-Support',
        'Sichere Programmierung und Analyse von Server-Logs auf mögliche Angriffe',
        'Technische Dokumentation neuer Funktionen und Schnittstellen, auch als Anleitung für andere Abteilungen',
        '18-monatige Migration des gesamten CMS von ASP.NET MVC auf eine REST-API-Architektur mitgeplant und umgesetzt',
        'All-in-One-CMS-Plattform für über 1.000 Unternehmen aus 12 Ländern, Verantwortung für die Module Kasse, Onlineshop, Website, Designer, Newsletter und Digital Signage',
        'Agile Sprints im zehnköpfigen Team, Code-Reviews, Ansprechpartner für Auszubildende'], true],
      ['08/2020 bis 07/2023','Ausbildung zum Fachinformatiker für Anwendungsentwicklung','Green Solutions Software GmbH und BBS Haarentor Oldenburg',null],
      ['08/2017 bis 06/2019','Staatlich geprüfter Informationstechnischer Assistent mit Fachhochschulreife','BZTG Oldenburg',[
        'Schwerpunkte: Netzwerktechnik, Windows Server und Linux',
        'Praxis: virtuelle Maschinen, Windows Server und Active Directory, VLANs im Cisco Packet Tracer, Cisco-Grundkurs Netzwerktechnik']]
    ],
    migAria:'Migration: vorher ein ASP.NET-MVC-Monolith, nachher eine REST-API mit getrennten Frontends',
    before:'Vorher', after:'Nachher', monolith:'Monolith', layerUi:'Oberfläche', layerLogic:'Logik', layerData:'Datenzugriff', frontend:'Frontend',
    skillsEyebrow:'Skills', skillsTitle:'Womit ich arbeite',
    skills:[
      ['Infrastruktur und Betrieb',['Linux','Docker','SSH','Backups','Monitoring mit Grafana','CI/CD','Git']],
      ['Netzwerk',['LAN','WLAN','VLANs','Switche','IPv4 und IPv6','Subnetting','DNS']],
      ['IT-Sicherheit',['Firewall-Regeln','Log-Analyse','Sichere Programmierung','Grundlagen Risikomanagement']],
      ['Windows',['Windows Server','Active Directory','Virtuelle Maschinen']],
      ['Automatisierung',['PowerShell','Claude Code','KI-Agenten']],
      ['Support und Dokumentation',['Störungsanalyse','1st- und 2nd-Level-Support','Technische Dokumentation']],
      ['Datenbanken',['SQL Server','PostgreSQL']],
      ['Entwicklung',['C#','ASP.NET Core','REST-APIs','Entity Framework Core','HTML','CSS','JavaScript','TypeScript','Angular','Next.js']]
    ],
    eduEyebrow:'Ausbildung', eduTitle:'Ausbildung und Sprachen', eduHead:'Ausbildung', langHead:'Sprachen',
    edu:[
      ['Fachinformatiker für Anwendungsentwicklung (IHK)','08/2020 bis 07/2023 · Note 2,0','Prüfungsteil Softwareprojekt 96 Punkte. Green Solutions Software GmbH und BBS Haarentor Oldenburg.'],
      ['Staatlich geprüfter Informationstechnischer Assistent mit Fachhochschulreife','08/2017 bis 06/2019 · BZTG Oldenburg','Schwerpunkte Netzwerktechnik, Windows Server und Linux.']
    ],
    spoken:[['Deutsch','zweisprachig'],['Arabisch','zweisprachig'],['Englisch','gutes technisches Englisch']],
    contactEyebrow:'Kontakt', contactTitle:'Lassen Sie uns sprechen.', contactText:'Sie erreichen mich per E-Mail, Telefon oder LinkedIn.',
    cEmail:'E-Mail', cPhone:'Telefon',
    copyright:'© 2026 Mohamad Noor Ghazal', imprint:'Impressum', privacy:'Datenschutz', phNote:'Platzhalter: Inhalt folgt',
    dSituation:'Ausgangslage', dDone:'Was ich umgesetzt habe', dTech:'Eingesetzte Technik',
    gArch:'Architektur', gFlow:'Ablauf', gHome:'Netzwerkkarte',
    det:{
      ng:{kind:'Nebenberufliches Projekt', situation:'Ein Gebrauchtwagenhändler brauchte eine öffentliche Website, eine Verwaltung für seine Fahrzeuge und einen Server, auf dem beides läuft. Der Bestand bei mobile.de sollte automatisch aktuell bleiben.',
        groups:[
          ['Betrieb','bi-hdd-rack',['Eigener Linux-Server bei Netcup, Verwaltung per SSH','Firewall-Regeln','Anwendungen in Docker-Containern','Backup-System','Mailserver','Monitoring mit Grafana']],
          ['Entwicklung','bi-braces',['Komplettes CMS selbst programmiert, inklusive Architektur','REST-API mit ASP.NET Core in C#, Daten in PostgreSQL','Öffentliche Website mit Next.js','Admin-Bereich mit Angular, inklusive Fahrzeug-Upload','Schnittstelle zu mobile.de, die den Fahrzeugbestand automatisch aktuell hält']]
        ],
        tech:['Linux','SSH','Firewall','Docker','Backups','Mailserver','Grafana','C#','ASP.NET Core','PostgreSQL','Next.js','Angular','mobile.de-Schnittstelle']},
      ai:{kind:'Eigenes Tool', situation:'Routineaufgaben wie das Auflisten und Analysieren von Pull Requests kosten Zeit. Ich wollte sie an KI-Agenten abgeben und trotzdem den Überblick behalten.',
        groups:[['','',['Eigenes Programm auf PowerShell-Basis, das KI-Agenten (Claude Code) startet und steuert','Die Agenten listen Pull Requests auf und analysieren sie','Die Ergebnisse kommen als Zusammenfassung zu mir','Eigene Claude-Code-Skills für Code-Reviews']]],
        tech:['PowerShell','Claude Code','Claude-Code-Skills','KI-Agenten']},
      home:{kind:'Privat', situation:'Mein Heimnetz nutze ich, um Netzwerk, Hardware und IT-Sicherheit praktisch auszuprobieren.',
        groups:[['','',['Raspberry Pi mit Pi-hole als DNS-Filter im Heimnetz','ESP32 mit Infrarot-Sender steuert alte Lautsprecher über eine Weboberfläche im lokalen Netz','ESP32 mit NFC-Leser startet Musik über Alexa und Spotify','Virtuelle Testsysteme mit Kali Linux']]],
        tech:['Raspberry Pi','Pi-hole','DNS','ESP32','Infrarot','NFC','Alexa','Spotify','Kali Linux']}
    },
    codeReviews:'Code-Reviews',
    // Zusätzliche Texte für die Website (Sprunglink, Impressum- und Datenschutz-Seiten)
    skip:'Zum Inhalt springen', home:'Zur Startseite', legalNote:''
  },
  en: {
    navLabel:'Main navigation', langLabel:'Language', menu:'Menu',
    nav:['About','Projects','Experience','Skills','Contact'],
    name:'Mohamad Noor Ghazal', role:'IT specialist · Linux, networking and automation · Oldenburg',
    h1a:'I build applications, ', h1b:'run servers', h1c:' and automate workflows.',
    sub:'IT specialist with two IT qualifications and six years of professional experience. I run my own Linux servers with Docker, firewall rules, backups and monitoring. I automate with PowerShell and analyse incidents in a platform used by more than 1,000 companies.',
    badge:'Available for a full-time permanent position', statusA:'Full-time', statusB:'Available after one month’s notice', statusLine:'Full-time · available after one month’s notice', location:'Oldenburg, Germany',
    ctaProjects:'View projects', ctaContact:'Contact',
    m:['years of professional experience','completed IT qualifications','companies use the platform I support','months of migrating the entire CMS'],
    aboutEyebrow:'About me', aboutTitle:'Network, server, application and operations',
    aboutText:'I am an IT specialist from Oldenburg with two completed IT qualifications. During my training as a state-certified IT assistant I focused on network technology, Windows Server and Linux. I have worked at Green Solutions Software GmbH since 2020, today as a full-stack web developer. There I analyse incidents in the live system, help with 1st and 2nd level support and document new features. Alongside my job I run my own Linux server. I am especially interested in infrastructure, networking and IT security.',
    chain:['Network','Server','Application','Automation'],
    projectsEyebrow:'Projects', projectsTitle:'Selected projects',
    p1Title:'NG Automobile: CMS and own Linux server', p1Kind:'Side project',
    p1Desc:'For a used car dealer I run my own Linux server at Netcup: administration via SSH, firewall rules, applications in Docker containers, a backup system, a mail server and monitoring with Grafana. It hosts a complete CMS that I programmed myself, with a REST API in C#, PostgreSQL, Next.js and Angular. An interface to mobile.de keeps the vehicle stock up to date automatically.',
    p2Title:'PowerShell automation with AI agents', p2Kind:'Own tool', p2Desc:'I automate recurring tasks with PowerShell. For this I built my own program that starts and steers AI agents (Claude Code). They list pull requests, analyse them and give me a summary.',
    p3Title:'Home network and hardware', p3Kind:'Personal', p3Desc:'Raspberry Pi with Pi-hole as a DNS filter on my home network. An ESP32 with an infrared sender controls old speakers through a web interface on the local network. An ESP32 with an NFC reader starts music via Alexa and Spotify. Plus virtual test systems with Kali Linux.',
    details:'View details', close:'Close', back:'Back to projects',
    dVisitors:'Visitors', dVisitorsS:'Browser', dWeb:'Public website', dApi:'REST API · C#', dDb:'Database', dServer:'Docker · Netcup Linux', dExtS:'Stock sync', dMon:'Monitoring', firewall:'Firewall', backups:'Backups', mail:'Mail server',
    f:[['PowerShell tool','starts and steers'],['AI agents','Claude Code with custom skills'],['Pull requests','list and analyse'],['Summary','an overview for me']],
    hInternet:'Internet', hNet:'Home network',
    h:[['Raspberry Pi','Pi-hole · DNS filter'],['ESP32 · Infrared','controls speakers via web'],['ESP32 · NFC','music via Alexa and Spotify'],['Test systems','Kali Linux · VMs']],
    archAria:'NG Automobile architecture: visitors, Next.js, ASP.NET Core API, PostgreSQL in Docker on Netcup Linux, sync with mobile.de, monitoring with Grafana',
    flowAria:'Flow: PowerShell tool, AI agents, pull requests, summary', homeAria:'Home network map: Raspberry Pi, two ESP32 boards, test systems',
    expEyebrow:'Experience', expTitle:'Work experience and background',
    jobs:[
      ['since 08/2023','Full-stack web developer','Green Solutions Software GmbH, Bad Zwischenahn',[
        'Bug analysis and incident resolution in the live system, 1st and 2nd level support',
        'Secure coding and analysis of server logs for possible attacks',
        'Technical documentation of new features and interfaces, also as guides for other departments',
        'Co-planned and delivered the 18-month migration of the entire CMS from ASP.NET MVC to a REST API architecture',
        'All-in-one CMS platform for more than 1,000 companies in 12 countries, responsible for the point of sale, online shop, website, designer, newsletter and digital signage modules',
        'Agile sprints in a team of ten, code reviews, contact person for apprentices'], true],
      ['08/2020 to 07/2023','Apprenticeship as IT specialist for application development','Green Solutions Software GmbH and BBS Haarentor Oldenburg',null],
      ['08/2017 to 06/2019','State-certified IT assistant with advanced technical college entrance qualification','BZTG Oldenburg',[
        'Focus: network technology, Windows Server and Linux',
        'Practice: virtual machines, Windows Server and Active Directory, VLANs in Cisco Packet Tracer, Cisco basic course in network technology']]
    ],
    migAria:'Migration: before an ASP.NET MVC monolith, after a REST API with separate front ends',
    before:'Before', after:'After', monolith:'Monolith', layerUi:'Interface', layerLogic:'Logic', layerData:'Data access', frontend:'Front end',
    skillsEyebrow:'Skills', skillsTitle:'What I work with',
    skills:[
      ['Infrastructure and operations',['Linux','Docker','SSH','Backups','Monitoring with Grafana','CI/CD','Git']],
      ['Networking',['LAN','WLAN','VLANs','Switches','IPv4 and IPv6','Subnetting','DNS']],
      ['IT security',['Firewall rules','Log analysis','Secure coding','Risk management basics']],
      ['Windows',['Windows Server','Active Directory','Virtual machines']],
      ['Automation',['PowerShell','Claude Code','AI agents']],
      ['Support and documentation',['Incident analysis','1st and 2nd level support','Technical documentation']],
      ['Databases',['SQL Server','PostgreSQL']],
      ['Development',['C#','ASP.NET Core','REST APIs','Entity Framework Core','HTML','CSS','JavaScript','TypeScript','Angular','Next.js']]
    ],
    eduEyebrow:'Education', eduTitle:'Education and languages', eduHead:'Education', langHead:'Languages',
    edu:[
      ['IT specialist for application development (IHK)','08/2020 to 07/2023 · Grade 2.0','Software project exam: 96 points. Green Solutions Software GmbH and BBS Haarentor Oldenburg.'],
      ['State-certified IT assistant with advanced technical college entrance qualification','08/2017 to 06/2019 · BZTG Oldenburg','Focus on network technology, Windows Server and Linux.']
    ],
    spoken:[['German','bilingual'],['Arabic','bilingual'],['English','good technical English']],
    contactEyebrow:'Contact', contactTitle:'Let’s talk.', contactText:'You can reach me by email, phone or LinkedIn.',
    cEmail:'Email', cPhone:'Phone',
    copyright:'© 2026 Mohamad Noor Ghazal', imprint:'Legal notice', privacy:'Privacy', phNote:'Placeholder: content coming soon',
    dSituation:'Starting point', dDone:'What I built', dTech:'Technology',
    gArch:'Architecture', gFlow:'Flow', gHome:'Network map',
    det:{
      ng:{kind:'Side project', situation:'A used car dealer needed a public website, a system to manage his vehicles and a server to run both. The stock on mobile.de had to stay up to date automatically.',
        groups:[
          ['Operations','bi-hdd-rack',['Own Linux server at Netcup, administered via SSH','Firewall rules','Applications in Docker containers','Backup system','Mail server','Monitoring with Grafana']],
          ['Development','bi-braces',['Programmed the complete CMS myself, including the architecture','REST API with ASP.NET Core in C#, data in PostgreSQL','Public website with Next.js','Admin area with Angular, including vehicle upload','Interface to mobile.de that keeps the vehicle stock up to date automatically']]
        ],
        tech:['Linux','SSH','Firewall','Docker','Backups','Mail server','Grafana','C#','ASP.NET Core','PostgreSQL','Next.js','Angular','mobile.de interface']},
      ai:{kind:'Own tool', situation:'Routine tasks such as listing and analysing pull requests take time. I wanted to hand them to AI agents and still keep the overview.',
        groups:[['','',['My own PowerShell program that starts and steers AI agents (Claude Code)','The agents list pull requests and analyse them','The results reach me as a summary','Custom Claude Code skills for code reviews']]],
        tech:['PowerShell','Claude Code','Claude Code skills','AI agents']},
      home:{kind:'Personal', situation:'I use my home network to try out networking, hardware and IT security in practice.',
        groups:[['','',['Raspberry Pi with Pi-hole as a DNS filter on the home network','ESP32 with an infrared sender controls old speakers through a web interface on the local network','ESP32 with an NFC reader starts music via Alexa and Spotify','Virtual test systems with Kali Linux']]],
        tech:['Raspberry Pi','Pi-hole','DNS','ESP32','Infrared','NFC','Alexa','Spotify','Kali Linux']}
    },
    codeReviews:'Code reviews',
    skip:'Skip to content', home:'Back to the homepage', legalNote:'This legal text is only available in German.'
  },
  ar: {
    navLabel:'التنقل الرئيسي', langLabel:'اللغة', menu:'القائمة',
    nav:['نبذة عني','المشاريع','الخبرة','المهارات','التواصل'],
    name:'محمد نور غزال', role:'أخصائي معلوماتية · Linux والشبكات والأتمتة · أولدنبورغ',
    h1a:'أطوّر التطبيقات، ', h1b:'وأدير الخوادم', h1c:' وأؤتمت سير العمل.',
    sub:'أخصائي معلوماتية حاصل على تدريبين مهنيين في تقنية المعلومات وست سنوات من الخبرة المهنية. أدير خوادم Linux خاصة بي باستخدام Docker وقواعد جدار الحماية والنسخ الاحتياطي والمراقبة، وأؤتمت المهام بـ PowerShell، وأحلل الأعطال في منصة تستخدمها أكثر من 1000 شركة.',
    badge:'متاح لوظيفة ثابتة بدوام كامل', statusA:'دوام كامل', statusB:'المباشرة بعد شهر من الإشعار', statusLine:'دوام كامل · المباشرة بعد شهر من الإشعار', location:'أولدنبورغ',
    ctaProjects:'عرض المشاريع', ctaContact:'تواصل معي',
    m:['سنوات من الخبرة المهنية','تدريب مهني مكتمل في تقنية المعلومات','شركة تستخدم المنصة التي أدعمها','شهرًا لمشروع ترحيل نظام إدارة المحتوى بالكامل'],
    aboutEyebrow:'نبذة عني', aboutTitle:'الشبكة، الخادم، التطبيق، والتشغيل',
    aboutText:'أنا أخصائي معلوماتية من أولدنبورغ حاصل على تدريبين مهنيين مكتملين في تقنية المعلومات. خلال تدريبي كمساعد تقني معلوماتي معتمد من الدولة تركّزت دراستي على تقنيات الشبكات و Windows Server و Linux. أعمل منذ عام 2020 لدى شركة Green Solutions Software GmbH، واليوم كمطوّر ويب متكامل. هناك أحلل الأعطال في النظام الحي، وأشارك في الدعم الفني من المستويين الأول والثاني، وأوثّق الوظائف الجديدة. إلى جانب عملي أدير خادم Linux خاصًا بي. تهمّني البنية التحتية والشبكات وأمن المعلومات بشكل خاص.',
    chain:['الشبكة','الخادم','التطبيق','الأتمتة'],
    projectsEyebrow:'المشاريع', projectsTitle:'مشاريع مختارة',
    p1Title:'NG Automobile: نظام إدارة محتوى وخادم Linux خاص', p1Kind:'مشروع جانبي',
    p1Desc:'لتاجر سيارات مستعملة أدير خادم Linux خاصًا بي لدى Netcup: الإدارة عبر SSH، وقواعد جدار الحماية، والتطبيقات في حاويات Docker، ونظام للنسخ الاحتياطي، وخادم بريد، ومراقبة عبر Grafana. يعمل عليه نظام متكامل لإدارة المحتوى برمجته بنفسي، مع واجهة REST بلغة C# وقاعدة PostgreSQL و Next.js و Angular. واجهة ربط مع mobile.de تُبقي مخزون السيارات محدّثًا تلقائيًا.',
    p2Title:'أتمتة PowerShell مع وكلاء الذكاء الاصطناعي', p2Kind:'أداة خاصة', p2Desc:'أؤتمت المهام المتكررة باستخدام PowerShell. لهذا الغرض بنيت برنامجًا خاصًا يشغّل وكلاء الذكاء الاصطناعي (Claude Code) ويوجّههم. يعرضون طلبات الدمج ويحللونها ويقدّمون لي ملخصًا.',
    p3Title:'الشبكة المنزلية والعتاد', p3Kind:'مشروع شخصي', p3Desc:'Raspberry Pi مع Pi-hole لتصفية DNS في الشبكة المنزلية. جهاز ESP32 بمرسل أشعة تحت الحمراء يتحكم بمكبرات صوت قديمة عبر واجهة ويب في الشبكة المحلية. جهاز ESP32 بقارئ NFC يشغّل الموسيقى عبر Alexa و Spotify. إضافة إلى أنظمة اختبار افتراضية بـ Kali Linux.',
    details:'عرض التفاصيل', close:'إغلاق', back:'العودة إلى المشاريع',
    dVisitors:'الزوار', dVisitorsS:'المتصفح', dWeb:'الموقع العام', dApi:'واجهة REST · C#', dDb:'قاعدة البيانات', dServer:'Docker · Netcup Linux', dExtS:'مزامنة المخزون', dMon:'المراقبة', firewall:'جدار الحماية', backups:'النسخ الاحتياطي', mail:'خادم البريد',
    f:[['أداة PowerShell','تشغيل وتوجيه'],['وكلاء الذكاء الاصطناعي','Claude Code مع مهارات خاصة'],['طلبات الدمج','عرض وتحليل'],['ملخص','نظرة عامة لي']],
    hInternet:'الإنترنت', hNet:'الشبكة المنزلية',
    h:[['Raspberry Pi','Pi-hole · تصفية DNS'],['ESP32 · أشعة تحت الحمراء','التحكم بمكبرات الصوت عبر الويب'],['ESP32 · NFC','موسيقى عبر Alexa و Spotify'],['أنظمة اختبار','Kali Linux · أجهزة افتراضية']],
    archAria:'بنية NG Automobile: الزوار، Next.js، واجهة ASP.NET Core، قاعدة PostgreSQL داخل Docker على خادم Netcup Linux، مزامنة مع mobile.de، ومراقبة عبر Grafana',
    flowAria:'المسار: أداة PowerShell، وكلاء الذكاء الاصطناعي، طلبات الدمج، ملخص', homeAria:'خريطة الشبكة المنزلية: Raspberry Pi، جهازا ESP32، أنظمة اختبار',
    expEyebrow:'الخبرة', expTitle:'الخبرة المهنية والمسيرة',
    jobs:[
      ['منذ 08/2023','مطوّر ويب متكامل','Green Solutions Software GmbH، باد تسفيشنان',[
        'تحليل الأخطاء ومعالجة الأعطال في النظام الحي، والمشاركة في الدعم الفني من المستويين الأول والثاني',
        'البرمجة الآمنة وتحليل سجلات الخادم بحثًا عن هجمات محتملة',
        'توثيق تقني للوظائف والواجهات الجديدة، وأيضًا كأدلة للأقسام الأخرى',
        'شاركت في تخطيط وتنفيذ ترحيل نظام إدارة المحتوى بالكامل من ASP.NET MVC إلى بنية REST API على مدى 18 شهرًا',
        'منصة متكاملة لإدارة المحتوى لأكثر من 1000 شركة من 12 دولة، ومسؤول عن وحدات نقاط البيع والمتجر الإلكتروني والموقع والمصمّم والنشرة الإخبارية واللافتات الرقمية',
        'عمل بأسلوب Agile ضمن فريق من عشرة أشخاص، ومراجعات الشيفرة، ومسؤول تواصل للمتدربين'], true],
      ['08/2020 حتى 07/2023','التدريب المهني كأخصائي معلوماتية لتطوير التطبيقات','Green Solutions Software GmbH و BBS Haarentor أولدنبورغ',null],
      ['08/2017 حتى 06/2019','مساعد تقني معلوماتي معتمد من الدولة مع شهادة الثانوية التقنية العليا','BZTG أولدنبورغ',[
        'التخصصات: تقنيات الشبكات و Windows Server و Linux',
        'التطبيق العملي: الأجهزة الافتراضية، و Windows Server و Active Directory، وشبكات VLAN في Cisco Packet Tracer، ودورة Cisco الأساسية في تقنيات الشبكات']]
    ],
    migAria:'الترحيل: قبل ذلك نظام ASP.NET MVC أحادي، وبعده واجهة REST مع واجهات أمامية منفصلة',
    before:'قبل', after:'بعد', monolith:'نظام أحادي', layerUi:'الواجهة', layerLogic:'المنطق', layerData:'الوصول إلى البيانات', frontend:'واجهة أمامية',
    skillsEyebrow:'المهارات', skillsTitle:'الأدوات التي أعمل بها',
    skills:[
      ['البنية التحتية والتشغيل',['Linux','Docker','SSH','النسخ الاحتياطي','المراقبة عبر Grafana','CI/CD','Git']],
      ['الشبكات',['LAN','WLAN','VLANs','المبدّلات','IPv4 و IPv6','تقسيم الشبكات الفرعية','DNS']],
      ['أمن المعلومات',['قواعد جدار الحماية','تحليل السجلات','البرمجة الآمنة','أساسيات إدارة المخاطر']],
      ['Windows',['Windows Server','Active Directory','الأجهزة الافتراضية']],
      ['الأتمتة',['PowerShell','Claude Code','وكلاء الذكاء الاصطناعي']],
      ['الدعم والتوثيق',['تحليل الأعطال','الدعم الفني من المستويين الأول والثاني','التوثيق التقني']],
      ['قواعد البيانات',['SQL Server','PostgreSQL']],
      ['التطوير',['C#','ASP.NET Core','واجهات REST','Entity Framework Core','HTML','CSS','JavaScript','TypeScript','Angular','Next.js']]
    ],
    eduEyebrow:'التعليم', eduTitle:'التعليم واللغات', eduHead:'التعليم', langHead:'اللغات',
    edu:[
      ['أخصائي معلوماتية لتطوير التطبيقات (IHK)','08/2020 حتى 07/2023 · التقدير 2.0','جزء مشروع البرمجيات في الامتحان: 96 نقطة. Green Solutions Software GmbH و BBS Haarentor أولدنبورغ.'],
      ['مساعد تقني معلوماتي معتمد من الدولة مع شهادة الثانوية التقنية العليا','08/2017 حتى 06/2019 · BZTG أولدنبورغ','التخصصات: تقنيات الشبكات و Windows Server و Linux.']
    ],
    spoken:[['الألمانية','ثنائي اللغة'],['العربية','ثنائي اللغة'],['الإنجليزية','إنجليزية تقنية جيدة']],
    contactEyebrow:'التواصل', contactTitle:'لنتحدث.', contactText:'يمكنكم التواصل معي عبر البريد الإلكتروني أو الهاتف أو LinkedIn.',
    cEmail:'البريد الإلكتروني', cPhone:'الهاتف',
    copyright:'© 2026 محمد نور غزال', imprint:'بيانات الناشر', privacy:'سياسة الخصوصية', phNote:'عنصر نائب: المحتوى لاحقًا',
    dSituation:'الوضع الأولي', dDone:'ما نفّذته', dTech:'التقنيات المستخدمة',
    gArch:'البنية', gFlow:'المسار', gHome:'خريطة الشبكة',
    det:{
      ng:{kind:'مشروع جانبي', situation:'احتاج تاجر سيارات مستعملة إلى موقع عام ونظام لإدارة سياراته وخادم يعمل عليه كل ذلك. وكان يجب أن يبقى المخزون على mobile.de محدّثًا تلقائيًا.',
        groups:[
          ['التشغيل','bi-hdd-rack',['خادم Linux خاص لدى Netcup، والإدارة عبر SSH','قواعد جدار الحماية','التطبيقات في حاويات Docker','نظام النسخ الاحتياطي','خادم البريد','المراقبة عبر Grafana']],
          ['التطوير','bi-braces',['برمجة نظام إدارة المحتوى بالكامل بنفسي، بما في ذلك البنية','واجهة REST بـ ASP.NET Core بلغة C# مع قاعدة بيانات PostgreSQL','الموقع العام بـ Next.js','لوحة الإدارة بـ Angular مع رفع السيارات','واجهة ربط مع mobile.de تُبقي مخزون السيارات محدّثًا تلقائيًا']]
        ],
        tech:['Linux','SSH','جدار الحماية','Docker','النسخ الاحتياطي','خادم البريد','Grafana','C#','ASP.NET Core','PostgreSQL','Next.js','Angular','واجهة mobile.de']},
      ai:{kind:'أداة خاصة', situation:'المهام الروتينية مثل عرض طلبات الدمج وتحليلها تستهلك الوقت. أردت أن أُسندها إلى وكلاء الذكاء الاصطناعي مع الاحتفاظ بنظرة عامة.',
        groups:[['','',['برنامج خاص مبني على PowerShell يشغّل وكلاء الذكاء الاصطناعي (Claude Code) ويوجّههم','الوكلاء يعرضون طلبات الدمج ويحللونها','تصلني النتائج على شكل ملخص','مهارات Claude Code خاصة لمراجعة الشيفرة']]],
        tech:['PowerShell','Claude Code','مهارات Claude Code','وكلاء الذكاء الاصطناعي']},
      home:{kind:'مشروع شخصي', situation:'أستخدم شبكتي المنزلية لتجربة الشبكات والعتاد وأمن المعلومات عمليًا.',
        groups:[['','',['Raspberry Pi مع Pi-hole لتصفية DNS في الشبكة المنزلية','جهاز ESP32 بمرسل أشعة تحت الحمراء يتحكم بمكبرات صوت قديمة عبر واجهة ويب في الشبكة المحلية','جهاز ESP32 بقارئ NFC يشغّل الموسيقى عبر Alexa و Spotify','أنظمة اختبار افتراضية بـ Kali Linux']]],
        tech:['Raspberry Pi','Pi-hole','DNS','ESP32','أشعة تحت الحمراء','NFC','Alexa','Spotify','Kali Linux']}
    },
    codeReviews:'مراجعة الشيفرة',
    skip:'الانتقال إلى المحتوى', home:'العودة إلى الصفحة الرئيسية', legalNote:'هذا النص القانوني متوفر باللغة الألمانية فقط.'
  }
};

/*
 * Impressum und Datenschutz (nur Deutsch, wird in allen Sprachen angezeigt).
 * Jeder Abschnitt hat eine Überschrift (h) und Absätze (p).
 * In den Absätzen ist einfaches HTML erlaubt, z. B. <br> oder <a href="...">.
 * WICHTIG: Die Platzhalter in <mark>...</mark> durch deine echte Anschrift ersetzen.
 */
window.LEGAL = {
  impressum: [
    { h: 'Angaben gemäß § 5 DDG', p: [
      'Mohamad Noor Ghazal<br><mark>[Straße und Hausnummer]</mark><br><mark>[Postleitzahl]</mark> Oldenburg<br>Deutschland'
    ]},
    { h: 'Kontakt', p: [
      'Telefon: <a href="tel:+4915906815359" dir="ltr">+49 1590 6815359</a><br>E-Mail: <a href="mailto:mohamad.noor.ghazal@gmail.com">mohamad.noor.ghazal@gmail.com</a>'
    ]},
    { h: 'Haftung für Inhalte', p: [
      'Die Inhalte dieser Website wurden mit größtmöglicher Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann ich jedoch keine Gewähr übernehmen.'
    ]},
    { h: 'Haftung für Links', p: [
      'Diese Website enthält Links zu externen Websites Dritter, auf deren Inhalte ich keinen Einfluss habe. Für diese fremden Inhalte ist stets der jeweilige Anbieter oder Betreiber verantwortlich. Zum Zeitpunkt der Verlinkung waren keine Rechtsverstöße erkennbar. Sollten mir Rechtsverletzungen bekannt werden, entferne ich die betreffenden Links umgehend.'
    ]},
    { h: 'Urheberrecht', p: [
      'Die Texte und Bilder dieser Website, insbesondere das Profilfoto, unterliegen dem deutschen Urheberrecht. Eine Verwendung außerhalb der Grenzen des Urheberrechts bedarf meiner vorherigen schriftlichen Zustimmung.',
      'Verwendete Schriften und Icons: Plus Jakarta Sans und IBM Plex Sans Arabic (SIL Open Font License) sowie Bootstrap Icons (MIT-Lizenz).'
    ]}
  ],
  datenschutz: [
    { h: '1. Verantwortlicher', p: [
      'Mohamad Noor Ghazal<br><mark>[Straße und Hausnummer]</mark><br><mark>[Postleitzahl]</mark> Oldenburg<br>Deutschland<br>E-Mail: <a href="mailto:mohamad.noor.ghazal@gmail.com">mohamad.noor.ghazal@gmail.com</a><br>Telefon: <a href="tel:+4915906815359" dir="ltr">+49 1590 6815359</a>'
    ]},
    { h: '2. Überblick', p: [
      'Diese Website ist ein persönliches Portfolio. Sie verwendet keine Cookies, kein Tracking, keine Analysewerkzeuge und keine eingebetteten Inhalte von Drittanbietern. Schriften und Icons werden vom selben Server geladen wie die Website. Die gewählte Sprache wird nur in der Adresse der Seite übertragen und nicht in Ihrem Browser gespeichert.'
    ]},
    { h: '3. Hosting über GitHub Pages', p: [
      'Diese Website wird über GitHub Pages bereitgestellt, einen Dienst der GitHub, Inc., 88 Colin P. Kelly Jr. Street, San Francisco, CA 94107, USA. Beim Aufruf der Website verarbeitet GitHub technisch notwendige Daten, insbesondere Ihre IP-Adresse, Datum und Uhrzeit des Zugriffs sowie Angaben zu Browser und Betriebssystem. Diese Daten werden benötigt, um die Website auszuliefern und die Sicherheit des Dienstes zu gewährleisten.',
      'Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO. Mein berechtigtes Interesse liegt in einer sicheren und zuverlässigen Bereitstellung dieser Website. Dabei können Daten in die USA übermittelt werden. Weitere Informationen finden Sie in der <a href="https://docs.github.com/de/site-policy/privacy-policies/github-general-privacy-statement" rel="noopener">Datenschutzerklärung von GitHub</a>.'
    ]},
    { h: '4. Kontakt per E-Mail oder Telefon', p: [
      'Wenn Sie mich per E-Mail oder Telefon kontaktieren, verarbeite ich Ihre Angaben (zum Beispiel Name, E-Mail-Adresse, Telefonnummer und den Inhalt Ihrer Nachricht), um Ihre Anfrage zu bearbeiten. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO, wenn Ihre Anfrage mit einem Vertrag oder vorvertraglichen Maßnahmen zusammenhängt, etwa einem Bewerbungsverfahren. In allen anderen Fällen ist Rechtsgrundlage Art. 6 Abs. 1 lit. f DSGVO, mein berechtigtes Interesse liegt in der Beantwortung Ihrer Anfrage.',
      'Mein E-Mail-Postfach wird bei Google (Gmail) betrieben. E-Mails an mich werden daher auch auf Servern von Google verarbeitet.',
      'Ich lösche Ihre Daten, sobald sie für die Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.'
    ]},
    { h: '5. Externe Links', p: [
      'Diese Website enthält Links zu externen Angeboten, zum Beispiel zu LinkedIn und ng-automobile.de. Daten werden an diese Anbieter erst übertragen, wenn Sie einen Link anklicken. Ab dann gelten die Datenschutzbestimmungen des jeweiligen Anbieters.'
    ]},
    { h: '6. Ihre Rechte', p: [
      'Sie haben das Recht auf Auskunft (Art. 15 DSGVO), Berichtigung (Art. 16 DSGVO), Löschung (Art. 17 DSGVO), Einschränkung der Verarbeitung (Art. 18 DSGVO), Datenübertragbarkeit (Art. 20 DSGVO) und Widerspruch gegen die Verarbeitung (Art. 21 DSGVO). Wenden Sie sich dazu einfach per E-Mail an mich.',
      'Außerdem haben Sie das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren, zum Beispiel bei der für Niedersachsen zuständigen Behörde, dem Landesbeauftragten für den Datenschutz Niedersachsen.'
    ]},
    { h: 'Stand', p: [ 'November 2026' ] }
  ]
};
