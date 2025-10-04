// 角色数据
const characterData = {
    /* 1 林黛玉 */
    daiyu: {
        name: "林黛玉",
        title: "潇湘妃子",
        image: "resources/character-daiyu.jpg",
        description: `姑苏林如海之女，母贾敏早亡，遂寄居荣府。眉尖若蹙，眸含秋水，通身孤高自许，一派天然风流。七岁能诗，八岁读《四书》，才思敏捷，一挥便就。性本真挚，口角锋芒，善谑善哭，泪珠儿终年化不开。所居潇湘馆，凤尾森森，龙吟细细，月下抚琴，声声都是离魂。判词"绛珠仙草"还泪而来，终身以情为命，情尽而逝，香魂一缕随花飞。`,
        personality: "孤高自许 · 目下无尘 · 才情冠世",
        poem: "花谢花飞花满天，红消香断有谁怜？\n游丝软系飘春榭，落絮轻沾扑绣帘。",
        skills: "诗词解谜 · 情感感知 · 古琴演奏"
      },
  
    /* 2 薛宝钗 */
    baochai: {
      name: "薛宝钗",
      title: "蘅芜君",
      image: "resources/character-baochai.jpg",
      description: "丰年好大雪，珍珠如土金如铁。宝钗肌骨莹润，举止娴雅，随分从时，藏愚守拙。少时随父游历，杂学旁收，医药禅理俱通；会针黹，能书画，更擅经商理财。蘅芜苑内奇草仙藤，冷翠清香，恰如她随和中自有锋芒。金锁一对'莫失莫忘'，原系金玉之谶，终是'齐眉举案'，却难慰'空对着山中高士晶莹雪'。",
      personality: "随分从时 · 藏愚守拙 · 博学宏览",
      poem: "珍重芳姿昼掩门，自携手瓮灌苔盆。\n胭脂洗出秋阶影，冰雪招来露砌魂。",
      skills: "医药禅理 · 经商理财 · 针黹书画"
    },
  
    /* 3 贾元春 */
    yuanchun: {
      name: "贾元春",
      title: "贤德妃",
      image: "resources/character-yuanchun.png",
      description: "荣府嫡长女，幼由贾母教养，贤孝才德，选入凤藻宫，封贤德妃。省亲一回，銮驾降临，大观园由此而开。凤袍霞帔之下，常怀隐忧：'当日既送我到那不得见人的去处'，一语道尽深宫寂寞。她维系两府荣华，却终是'虎兕相逢'，香魂早逝，盛筵难再。薄命司中，春到尽头，诸芳散尽，唯闻夜雨残更。",
      personality: "雍容端雅 · 孝友慈厚 · 负重隐忍",
      poem: "二十年来辨是非，榴花开处照宫闱。\n三春争及初春景，虎兕相逢大梦归。",
      skills: "宫廷礼仪 · 音律书画 · 权衡朝局"
    },
  
    /* 4 贾探春 */
    tanchun: {
      name: "贾探春",
      title: "蕉下客",
      image: "resources/character-tanchun.png",
      description: "庶出却英爽阔大，秋爽斋内梧桐芭蕉，笔床砚匣皆整齐。能书善画，更有经济之才，兴利除弊，一洗府中积习。'敏探春兴利除宿弊'，刀笔生风，下人畏服。然'才自精明志自高，生于末世运偏消'，终归远嫁海隅，风帆万里，把故乡愁思付与东风。",
      personality: "英爽阔大 · 才精志高 · 治事果断",
      poem: "才自精明志自高，生于末世运偏消。\n清明涕送江边望，千里东风一梦遥。",
      skills: "兴利除弊 · 书法雅集 · 风筝战术"
    },
  
    /* 5 史湘云 */
    xiangyun: {
      name: "史湘云",
      title: "枕霞旧友",
      image: "resources/character-xiangyun.png",
      description: "史侯家千金，襁褓中父母违，却养成英豪阔大宽宏量。枕霞旧友，酣卧芍药茵，醉眼曼声'这鸭头不是那丫头'，真名士自风流。诗才敏捷，与黛玉斗韵，动辄'鹿肉联诗'，锦心绣口。然'富贵又何为'？家道中落，配得才郎，又早寡；江上孤舟，湘水逝，楚云飞，一样红颜薄命。",
      personality: "豪爽豁达 · 才思敏捷 · 名士风流",
      poem: "富贵又何为？襁褓之间父母违。\n展眼吊斜晖，湘江水逝楚云飞。",
      skills: "行酒令 · 诗词速对 · 醉拳"
    },
  
    /* 6 妙玉 */
    miaoyu: {
      name: "妙玉",
      title: "栊翠庵主",
      image: "resources/character-miaoyu.png",
      description: "苏州官宦女，因疾入空门，带发修行。栊翠庵雪里红梅，独坐蒲团，品茶论水，一尘不染。'欲洁何曾洁'，偏遭劫盗；'云空未必空'，终陷泥淖。她拿古董杯斟茶给宝玉，却嫌刘姥姥脏；一面孤高，一面情丝暗结，'可怜金玉质，终陷淖泥中'，正是过洁世同嫌。",
      personality: "孤高洁癖 · 外冷内热 · 禅茶一味",
      poem: "欲洁何曾洁，云空未必空。\n可怜金玉质，终陷淖泥中。",
      skills: "茶道 · 禅理 · 梅花灸"
    },
  
    /* 7 贾迎春 */
    yingchun: {
      name: "贾迎春",
      title: "二木头",
      image: "resources/character-yingchun.png",
      description: "荣府二小姐，温柔沉默，观之可亲，下人背地唤'二木头'。素喜《太上感应篇》，万事随人，连下人也可欺她。绣户花柳质，却被父亲抵债嫁与中山狼孙绍祖，一载赴黄粱。她代表'懦弱善良'的毁灭：无争无竞，反被狼子吞噬；温柔本无罪，却成了原罪，香魂一缕随风雨。",
      personality: "温柔沉默 · 懦弱无争 · 心地善良",
      poem: "子系中山狼，得志便猖狂。\n金闺花柳质，一载赴黄粱。",
      skills: "围棋 · 女红 · 忍耐"
    },
  
    /* 8 贾惜春 */
    xichun: {
      name: "贾惜春",
      title: "藕榭",
      image: "resources/character-xichun.png",
      description: "宁府幼女，少年孤介。眼见三个姐姐春残花谢，便生'了悟'之心：'我清清白白一个人，为什么教你们带累坏了？'藕香榭里挥毫作画，笔底江山皆空门。最终缁衣顿改昔年妆，独卧青灯古佛旁。她勘破三春景不长，以画笔为筏，渡己渡人，了却侯门富贵债。",
      personality: "孤介冷峭 · 遁世向佛 · 画笔通灵",
      poem: "勘破三春景不长，缁衣顿改昔年妆。\n可怜绣户侯门女，独卧青灯古佛旁。",
      skills: "佛画 · 梵音 · 净心"
    },
  
    /* 9 王熙凤 */
    xifeng: {
      name: "王熙凤",
      title: "凤辣子",
      image: "resources/character-xifeng.png",
      description: "自幼充男儿教养，杀伐决断，威重令行。荣府上下，事无巨细，先闻其声后见其影：'我来迟了，不曾迎接远客！'丹凤三角眼，柳叶吊梢眉，一怒而诸侯惧。然机关算尽，误了卿卿性命；生时心已碎，死后性空灵。她像一柄华丽双刃，劈开封建家族光鲜表皮，也割破自己。",
      personality: "杀伐决断 · 威重令行 · 机关算尽",
      poem: "机关算尽太聪明，反算了卿卿性命。\n生前心已碎，死后性空灵。",
      skills: "权谋策略 · 管理掌控 · 情报收集"
    },
  
    /* 10 贾巧姐 */
    qiaojie: {
      name: "贾巧姐",
      title: "巧哥儿",
      image: "resources/character-qiaojie.png",
      description: "荣府曾长孙，幼唤大姐儿。生逢末世，父罪抄家，被狠舅奸兄卖入烟花。幸刘姥姥积余庆，板车夜奔，纺车吱呀，织就一村妇平淡余生。从金枝到桑女，她代表'留余庆'的因果：积善之家，必有余庆；积不善之家，必有余殃。巧遇恩人，方得太平。",
      personality: "天真淳朴 · 坚韧不拔 · 知恩图报",
      poem: "留余庆，留余庆，忽遇恩人；\n幸娘亲，幸娘亲，积得阴功。",
      skills: "纺织 · 农耕 · 乡野生存"
    },
  
    /* 11 李纨 */
    liwan: {
      name: "李纨",
      title: "稻香老农",
      image: "resources/character-liwan.png",
      description: "青春守寡，竹篱茅舍，槁木死灰。稻香村外，一畦春韭绿，十里稻花香；她教子读书，课孙纺织，把锦绣年华织成教子成名图。晚年兰桂齐芳，诰命加身，却仍是'如冰水好空相妒'。桃李春风结子完，到头谁似一盆兰？她用最沉默的方式，完成对封建礼教的终极顺从与报复。",
      personality: "贞静淡泊 · 教子成名 · 槁木死灰",
      poem: "桃李春风结子完，到头谁似一盆兰。\n如冰水好空相妒，枉与他人作笑谈。",
      skills: "稻作 · 教子 · 竹编"
    },
  
    /* 12 秦可卿 */
    keqing: {
      name: "秦可卿",
      title: "兼美仙子",
      image: "resources/character-keqing.png",
      description: "鲜艳妩媚，有似乎宝钗；风流袅娜，则又如黛玉。香闺绣榻，情天情海幻情身。她像一面镜子，照出宁国府深处的糜烂：造衅开端实在宁。一夜间，鲜花变为毒草，缢死天香楼。她用自己短暂的盛放与凋零，为《红楼梦》写下最暗一抹艳红，也敲响封建家族败亡的第一声丧钟。",
      personality: "袅娜风流 · 温柔和缓 · 命运多舛",
      poem: "情天情海幻情身，情既相逢必主淫。\n漫言不肖皆荣出，造衅开端实在宁。",
      skills: "预知梦 · 房中之术 · 情感引导"
    }
  };
// 粒子系统
let particles = [];
let particleSystem;

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particle-container');
    canvas.style('position', 'fixed');
    canvas.style('top', '0');
    canvas.style('left', '0');
    canvas.style('z-index', '-1');
    
    // 初始化粒子
    for (let i = 0; i < 100; i++) {
        particles.push(new Particle());
    }
}

function draw() {
    clear();
    
    // 更新和绘制粒子
    for (let particle of particles) {
        particle.update();
        particle.display();
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.vx = random(-0.5, 0.5);
        this.vy = random(-0.5, 0.5);
        this.size = random(1, 3);
        this.opacity = random(0.1, 0.3);
        this.color = random(['#dc2626', '#b45309', '#f5f5f5']);
    }
    
    update() {
        this.x += this.vx;
        this.y += this.vy;
        
        // 边界检测
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;
        
        // 保持在画布内
        this.x = constrain(this.x, 0, width);
        this.y = constrain(this.y, 0, height);
    }
    
    display() {
        push();
        translate(this.x, this.y);
        fill(red(this.color), green(this.color), blue(this.color), this.opacity * 255);
        noStroke();
        ellipse(0, 0, this.size);
        pop();
    }
}

// DOM加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initializeAnimations();
    initializeCharacterSelector();
    initializeScrollReveal();
    initializeNavigation();
});

// 初始化动画
function initializeAnimations() {
    // 标题动画
    anime({
        targets: '#title-part1',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: 500,
        easing: 'easeOutExpo'
    });
    
    anime({
        targets: '#title-part2',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: 700,
        easing: 'easeOutExpo'
    });
    
    // 副标题动画
    anime({
        targets: '#subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800,
        delay: 1200,
        easing: 'easeOutExpo'
    });
    
    // 按钮动画
    anime({
        targets: '#hero-buttons button',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: anime.stagger(200, {start: 1500}),
        easing: 'easeOutExpo'
    });
    
    // 按钮悬停效果
    const buttons = document.querySelectorAll('#hero-buttons button');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            anime({
                targets: this,
                scale: 1.05,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
        
        button.addEventListener('mouseleave', function() {
            anime({
                targets: this,
                scale: 1,
                duration: 200,
                easing: 'easeOutQuad'
            });
        });
    });
}

// 初始化角色选择器
function initializeCharacterSelector() {
    const characterCards = document.querySelectorAll('.character-card');
    const characterDisplay = {
        image: document.getElementById('character-image'),
        name: document.getElementById('character-name'),
        description: document.getElementById('character-description'),
        personality: document.getElementById('character-personality'),
        poem: document.getElementById('character-poem'),
        skills: document.getElementById('character-skills')
    };
    
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const characterKey = this.dataset.character;
            const character = characterData[characterKey];
            
            if (character) {
                // 移除所有active类
                characterCards.forEach(c => c.classList.remove('active'));
                // 添加active类到当前卡片
                this.classList.add('active');
                
                // 动画更新角色信息
                anime({
                    targets: '#character-display',
                    opacity: [1, 0.3, 1],
                    duration: 600,
                    easing: 'easeInOutQuad',
                    begin: function() {
                        // 更新内容
                        characterDisplay.image.src = character.image;
                        characterDisplay.name.textContent = character.name;
                        characterDisplay.description.textContent = character.description;
                        characterDisplay.personality.textContent = character.personality;
                        characterDisplay.poem.textContent = character.poem;
                        characterDisplay.skills.textContent = character.skills;
                    }
                });
            }
        });
    });
}

// 初始化滚动显示效果
function initializeScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // 为卡片添加交错动画
                const cards = entry.target.querySelectorAll('.character-card, article');
                if (cards.length > 0) {
                    anime({
                        targets: cards,
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 600,
                        delay: anime.stagger(100),
                        easing: 'easeOutExpo'
                    });
                }
            }
        });
    }, observerOptions);
    
    // 观察所有需要滚动显示的元素
    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });
}

// 初始化导航
function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // 如果是外部链接，不阻止默认行为
            const file = this.href.split('/').pop().split('?')[0];
        if (['index.html', 'characters.html', 'features.html'].includes(file)) {
            return; // 允许正常跳转
        }
            
            e.preventDefault();
            
            // 移除所有active类
            navLinks.forEach(l => l.classList.remove('active'));
            // 添加active类到当前链接
            this.classList.add('active');
        });
    });
    
    // 平滑滚动到锚点
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 按钮点击效果
document.addEventListener('click', function(e) {
    if (e.target.matches('button') || e.target.closest('button')) {
        const button = e.target.matches('button') ? e.target : e.target.closest('button');
        
        // 创建波纹效果
        const ripple = document.createElement('span');
        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(220, 38, 38, 0.3);
            border-radius: 50%;
            transform: scale(0);
            pointer-events: none;
        `;
        
        button.style.position = 'relative';
        button.style.overflow = 'hidden';
        button.appendChild(ripple);
        
        anime({
            targets: ripple,
            scale: [0, 2],
            opacity: [0.3, 0],
            duration: 600,
            easing: 'easeOutExpo',
            complete: function() {
                ripple.remove();
            }
        });
    }
});

// 窗口滚动效果
let lastScrollTop = 0;
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const navbar = document.querySelector('nav');
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // 向下滚动，隐藏导航栏
        navbar.style.transform = 'translateY(-100%)';
    } else {
        // 向上滚动，显示导航栏
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// 添加导航栏过渡效果
const navbar = document.querySelector('nav');
navbar.style.transition = 'transform 0.3s ease-in-out';