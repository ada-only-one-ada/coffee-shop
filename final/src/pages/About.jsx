import '../css/About.css';
import TextBlock from '../components/TextBlock';
import { useState } from 'react';
import Button from '../components/Button';
import sanmaoImg from '/sanmao.jpeg'

const translations = {
    english: {
        aboutEcho: `Echo Café is a unique coffee store that pays tribute to the beloved Taiwanese writer, Echo Chen Ping, better known by her pen name, Sanmao. Located in the heart of Las Palmas, this cozy café draws inspiration from Sanmao’s adventurous spirit and profound connection to the diverse cultures she encountered throughout her life. The interior of Echo Café is adorned with excerpts from her notable works, such as "Stories of the Sahara," and photographs from her travels, creating an inspiring atmosphere for customers who seek a moment of peace and reflection with their coffee.`,
        menuFeatures: `The menu at Echo Café features a blend of traditional and exotic flavors, mirroring the fusion of cultures Sanmao experienced during her stays in places like the Sahara and the Canary Islands. Most of the drinks and dishes are named after themes and locations from her writings, such as the “Sahara Sunrise” – a spicy, cinnamon-infused coffee, and the “Canary Whispers” – a light coffee that captures the essence of the islands’ culinary delights. These offerings not only tantalize the palate but also tell stories, inviting patrons to taste the world through Sanmao’s eyes. The foods are named after the seven main Canary Islands.`,
        culturalHub: `Echo Café also serves as a cultural hub, hosting book readings, travel discussions, and writing workshops that resonate with Sanmao’s life as a writer, traveler, and eternal student of the world. The café often features guest speakers who delve into topics ranging from world travel to personal growth, all themes dear to Sanmao. This vibrant community space encourages visitors to engage with each other, share stories, and perhaps find a bit of the nomadic spirit that Sanmao embodied.`,
        honoringSanmao: ` In honoring Sanmao, Echo Café is more than just a place for coffee; it is a sanctuary for dreamers, writers, and adventurers. Each cup served is a reminder of Sanmao’s legacy—a woman who traversed vast physical and emotional landscapes and captured the beauty of her experiences in her timeless writings. For fans and newcomers alike, Echo Café offers an opportunity to connect with her spirit, inspiring all to explore the richness of life with curiosity and passion.`
    },
    chinese: {
        aboutEcho: `Echo Café 是一家独特的咖啡店，向深受爱戴的台湾作家陈平（笔名三毛）致敬。这家位于拉斯帕尔马斯市中心的舒适咖啡厅，从三毛冒险的精神和她一生中与不同文化的深刻联系中汲取灵感。Echo Café 的内部装饰着她的代表作《撒哈拉的故事》等书籍的摘录以及她旅行的照片，为寻求一刻安宁和思考的顾客们创造了一种鼓舞人心的氛围。`,
        menuFeatures: `菜单上融合了传统与异国情调的风味，反映了三毛在撒哈拉沙漠和加那利群岛等地的文化融合体验。大部分咖啡和菜肴以她作品中的主题和地点命名，如“撒哈拉日出”——一种辛辣含肉桂的咖啡，以及“加那利低语”——一种轻柔的咖啡，捕捉了岛屿烹饪乐趣的精髓。这些菜品不仅挑逗味蕾，还讲述故事，邀请顾客通过三毛的眼睛品味世界。食品以七个主要的加那利岛屿命名。`,
        culturalHub: `Echo Café 还是一个文化中心，举办书籍朗读、旅行讨论和写作工作坊，这些都与三毛作为作家、旅行者和终身世界学习者的生活息息相关。咖啡厅常邀请嘉宾探讨从世界旅行到个人成长等各种话题，这些都是三毛所珍视的主题。这个充满活力的社区空间鼓励访客们相互交流、分享故事，或许还能找到一丝三毛体现的游牧精神。`,
        honoringSanmao: `为纪念三毛，Echo Café 不仅仅是一个喝咖啡的地方；它是梦想家、作家和冒险家的避风港。每一杯咖啡都提醒人们三毛的遗产——一位跨越广阔的物理和情感景观、在她永恒的文字中捕捉体验之美的女性。对于粉丝和新朋友来说，Echo Café 提供了一个与她精神连接的机会，激励所有人带着好奇和热情探索生活的丰富多彩。`
    },
    hindi: {
        aboutEcho: `इको कैफे एक अनोखा कॉफी स्टोर है जो प्यारी ताइवानी लेखिका, इको चेन पिंग को श्रद्धांजलि देता है, जिसे उनके कलमी नाम सनमाओ से बेहतर जाना जाता है। लास पाल्मास के दिल में स्थित, यह आरामदायक कैफे सनमाओ की साहसिक आत्मा और उनके जीवन भर में मिली विभिन्न संस्कृतियों से गहरे संबंध से प्रेरित है। इको कैफे का इंटीरियर उनकी प्रमुख कृतियों जैसे "सहारा की कहानियाँ" से उद्धरण और उनकी यात्राओं की तस्वीरों से सजाया गया है, जो ग्राहकों को उनकी कॉफी के साथ शांति और चिंतन का पल खोजने के लिए प्रेरणादायक वातावरण बनाता है।`,
        menuFeatures: `इको कैफे का मेन्यू पारंपरिक और विदेशी स्वादों का मिश्रण प्रस्तुत करता है, जो सनमाओ के सहारा और कैनरी द्वीप समूह जैसे स्थानों पर रहने के दौरान अनुभव की गई सांस्कृतिक मिश्रण को दर्शाता है। अधिकांश पेय और व्यंजन उनके लेखन से प्रेरित विषयों और स्थानों पर नामित हैं, जैसे कि "सहारा सनराइज" - एक मसालेदार, दालचीनी युक्त कॉफी, और "कैनरी व्हिस्पर्स" - एक हल्की कॉफी जो द्वीपों के कुलीन व्यंजनों का सार पकड़ती है। ये प्रसाद न केवल तालु को उत्तेजित करते हैं बल्कि कहानियां भी बताते हैं, जो ग्राहकों को सनमाओ की नजर से दुनिया का स्वाद लेने के लिए आमंत्रित करते हैं। खाने के आइटम सात मुख्य कैनरी द्वीपों के नाम पर रखे गए हैं।`,
        culturalHub: `इको कैफे सांस्कृतिक केंद्र के रूप में भी काम करता है, जहां पुस्तक पाठन, यात्रा चर्चाएँ, और लेखन कार्यशालाएँ आयोजित की जाती हैं जो सनमाओ के लेखक, यात्री और विश्व की सदा विद्यार्थी के रूप में जीवन से प्रतिध्वनित होती हैं। कैफे अक्सर अतिथि वक्ताओं को विश्व यात्रा से लेकर व्यक्तिगत विकास तक के विषयों पर चर्चा के लिए आमंत्रित करता है, ये सभी विषय सनमाओ के प्रिय थे। यह जीवंत सामुदायिक स्थान आगंतुकों को एक-दूसरे के साथ संलग्न करने, कहानियाँ साझा करने और शायद सनमाओ द्वारा प्रतिष्ठित खानाबदोश आत्मा का एक अंश खोजने के लिए प्रोत्साहित करता है।`,
        honoringSanmao: `सनमाओ के सम्मान में, इको कैफे केवल एक कॉफी पीने की जगह से अधिक है; यह सपने देखने वालों, लेखकों और साहसिकों के लिए एक आश्रय स्थल है। परोसी गई हर एक कप कॉफी सनमाओ की विरासत की याद दिलाती है—एक महिला जिसने विशाल भौतिक और भावनात्मक परिदृश्यों को पार किया और अपने अनुभवों की सुंदरता को अपने कालजयी लेखन में संजोया। प्रशंसकों और नए आगंतुकों के लिए, इको कैफे उन्हें उनकी आत्मा से जुड़ने का अवसर प्रदान करता है, सभी को जिज्ञासा और जुनून के साथ जीवन की समृद्धि का पता लगाने के लिए प्रेरित करता है।`
    },
    spanish: {
        aboutEcho: `Echo Café es una cafetería única que rinde homenaje a la querida escritora taiwanesa, Echo Chen Ping, más conocida por su seudónimo, Sanmao. Situada en el corazón de Las Palmas, esta acogedora cafetería se inspira en el espíritu aventurero de Sanmao y su profunda conexión con las diversas culturas que encontró a lo largo de su vida. El interior de Echo Café está adornado con extractos de sus obras destacadas, como "Historias del Sahara", y fotografías de sus viajes, creando un ambiente inspirador para los clientes que buscan un momento de paz y reflexión con su café.`,
        menuFeatures: `El menú de Echo Café ofrece una mezcla de sabores tradicionales y exóticos, reflejando la fusión de culturas que Sanmao experimentó durante sus estancias en lugares como el Sahara y las Islas Canarias. La mayoría de las bebidas y platos están nombrados en honor a temas y ubicaciones de sus escritos, como el "Amanecer Saharaui" – un café picante con canela, y los "Susurros Canarios" – un café ligero que captura la esencia de las delicias culinarias de las islas. Estas ofertas no solo deleitan el paladar sino que también cuentan historias, invitando a los clientes a degustar el mundo a través de los ojos de Sanmao. Los alimentos llevan los nombres de las siete principales Islas Canarias.`,
        culturalHub: `Echo Café también funciona como un centro cultural, albergando lecturas de libros, discusiones sobre viajes y talleres de escritura que resuenan con la vida de Sanmao como escritora, viajera y eterna estudiante del mundo. El café a menudo presenta oradores invitados que exploran temas que van desde viajes mundiales hasta el crecimiento personal, todos temas queridos por Sanmao. Este espacio comunitario vibrante alienta a los visitantes a interactuar entre ellos, compartir historias y quizás encontrar un poco del espíritu nómada que Sanmao encarnaba.`,
        honoringSanmao: `En honor a Sanmao, Echo Café es más que un lugar para tomar café; es un santuario para soñadores, escritores y aventureros. Cada taza servida es un recordatorio del legado de Sanmao, una mujer que atravesó vastos paisajes físicos y emocionales y capturó la belleza de sus experiencias en sus escritos atemporales. Para aficionados y nuevos visitantes por igual, Echo Café ofrece la oportunidad de conectar con su espíritu, inspirando a todos a explorar la riqueza de la vida con curiosidad y pasión.`
    }
}

function About() {
    const [language, setLanguage] = useState('english');
    const onChangeLanguage = (lang) => {
        setLanguage(lang);
    }

    return (
        <div className='about'>
            <div className='texts'>
                <h2>About Echo Café</h2>
                <div className="languages">
                    <Button
                        className={`lang ${language === 'english' ? 'active' : ''}`}
                        onClick={() => onChangeLanguage('english')}>
                        English
                    </Button>
                    <Button
                        className={`lang ${language === 'chinese' ? 'active' : ''}`}
                        onClick={() => onChangeLanguage('chinese')}>
                        中文
                    </Button>
                    <Button
                        className={`lang ${language === 'hindi' ? 'active' : ''}`}
                        onClick={() => onChangeLanguage('hindi')}>
                        हिन्दी
                    </Button>
                    <Button
                        className={`lang ${language === 'spanish' ? 'active' : ''}`}
                        onClick={() => onChangeLanguage('spanish')}>
                        Español
                    </Button>
                </div>
                <TextBlock> {translations[language].aboutEcho}</TextBlock >
                <TextBlock> {translations[language].menuFeatures}</TextBlock >
                <TextBlock> {translations[language].culturalHub}</TextBlock >
                <TextBlock> {translations[language].honoringSanmao}</TextBlock >
            </div>

            <img src={sanmaoImg} alt="Sanmao's smiling photo in black and white" />
        </div>
    )
}

export default About;