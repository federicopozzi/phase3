let cardOptions = {}

let pref = document.location.hostname === "federicopozzi.github.io" ? "/phase3/pages/" : "/phase3/pages/";

switch (document.location.pathname) {
    case pref + "bellyOp01.html":
        cardOptions.title = 'GASTRIC SLEEVE SURGERY';
        cardOptions.firstImg = '../assets/img/bellyAll/Belly_01_01.jpg';
        cardOptions.secondImg = '../assets/img/bellyAll/Belly_01_02.jpg';
        cardOptions.thirdImg = '../assets/img/bellyAll/Belly_01_03.jpg';
        cardOptions.igImg = '../assets/img/bellyAll/IG_Belly_01.jpg';
        cardOptions.profile = '@balticsurgerytijuana';
        cardOptions.secondLine = 'Plastic & Bariatric Surgery';
        cardOptions.follower = '54.6k';
        cardOptions.posts = "2.839";
        cardOptions.firstBio = "The best Medical Tourism Company in Tijuana.";
        cardOptions.secondBio = "balticsurgery.com";
        cardOptions.secondBioLink = "http://www.balticsurgery.com/";
        cardOptions.country = "MEXICO";
        cardOptions.viewProfile = 'https://www.instagram.com/balticsurgerytijuana/';
        cardOptions.typeOp = 'GASTRIC SLEEVE SURGERY';
        cardOptions.price = "$ 4.400";
        cardOptions.viewDeal = 'https://www.instagram.com/p/CJWlJd4hmwc/';
        break;

    case pref + "bellyOp02.html":
        cardOptions.title = 'MOMMY MAKEOVER';
        cardOptions.firstImg = '../assets/img/bellyAll/Belly_02_01.jpg';
        cardOptions.secondImg = '../assets/img/bellyAll/Belly_02_02.jpg';
        cardOptions.thirdImg = '../assets/img/bellyAll/Belly_02_03.jpg';
        cardOptions.igImg = '../assets/img/bellyAll/IG_Belly_02.jpg';
        cardOptions.profile = '@balticsurgerytijuana';
        cardOptions.secondLine = 'Plastic & Bariatric Surgery';
        cardOptions.follower = '54.6k';
        cardOptions.posts = "2.839";
        cardOptions.firstBio = "The best Medical Tourism Company in Tijuana.";
        cardOptions.secondBio = "balticsurgery.com";
        cardOptions.secondBioLink = "http://www.balticsurgery.com/";
        cardOptions.country = "MEXICO";
        cardOptions.viewProfile = 'https://www.instagram.com/balticsurgerytijuana/';
        cardOptions.typeOp = 'MOMMY MAKEOVER';
        cardOptions.price = "$ 7.900";
        cardOptions.viewDeal = 'https://www.instagram.com/p/CCY37xih5zY/';
        break;

    case pref + "bellyOp03.html":
        cardOptions.title = 'TUMMY TUCK';
        cardOptions.firstImg = '../assets/img/bellyAll/Belly_03_01.jpg';
        cardOptions.secondImg = '../assets/img/bellyAll/Belly_03_02.jpg';
        cardOptions.thirdImg = '../assets/img/bellyAll/Belly_03_03.jpg';
        cardOptions.igImg = '../assets/img/bellyAll/IG_Belly_03.jpg';
        cardOptions.profile = '@plasticsurgeryphuket';
        cardOptions.secondLine = 'Plastic Surgery Phuket';
        cardOptions.follower = '1.2k';
        cardOptions.posts = "497";
        cardOptions.firstBio = "📧: info@plastic-surgery-phuket.com";
        cardOptions.secondBio = "youtu.be/agpsVo6HF6A";
        cardOptions.secondBioLink = "http://youtu.be/agpsVo6HF6A";
        cardOptions.country = "Thailand";
        cardOptions.viewProfile = 'https://www.instagram.com/plasticsurgeryphuket/\n';
        cardOptions.typeOp = 'TUMMY TUCK';
        cardOptions.price = "$ 6.900";
        cardOptions.viewDeal = 'https://www.instagram.com/p/Bj-_puRHDe4/\n';
        break;

    default:

}


document.getElementById("titlePage").textContent = cardOptions.title;
document.getElementById('firstImg').src = cardOptions.firstImg;
document.getElementById('secondImg').src = cardOptions.secondImg;
document.getElementById('thirdImg').src = cardOptions.thirdImg;
document.getElementById('igImg').src = cardOptions.igImg;
document.getElementById('profile').textContent = cardOptions.profile;
document.getElementById('secondLine').textContent = cardOptions.secondLine;
document.getElementById('follower').textContent = cardOptions.follower;
document.getElementById('posts').textContent = cardOptions.posts;
document.getElementById('firstBio').textContent = cardOptions.firstBio;
document.getElementById('secondBio').href = cardOptions.secondBioLink;
document.getElementById('secondBio').textContent = cardOptions.secondBio;
document.getElementById('country').textContent = cardOptions.country;
document.getElementById('viewProfile').href = cardOptions.viewProfile;
document.getElementById('typeOp').textContent = cardOptions.typeOp;
document.getElementById('price').textContent = cardOptions.price;
document.getElementById('viewDeal').href = cardOptions.viewDeal;


document.getElementById('firstImgMob').src = cardOptions.firstImg;
document.getElementById('igImgMob').src = cardOptions.igImg;
document.getElementById('profileMob').textContent = cardOptions.profile;
document.getElementById('secondLineMob').textContent = cardOptions.secondLine;
//document.getElementById('followerMob').textContent = cardOptions.follower;
//document.getElementById('postsMob').textContent = cardOptions.posts;
document.getElementById('firstBioMob').textContent = cardOptions.firstBio;
document.getElementById('secondBioMob').href = cardOptions.secondBioLink;
document.getElementById('secondBioMob').textContent = cardOptions.secondBio;
document.getElementById('countryMob').textContent = cardOptions.country;
document.getElementById('viewProfileMob').href = cardOptions.viewProfile;
document.getElementById('typeOpMob').textContent = cardOptions.typeOp;
document.getElementById('priceMob').textContent = cardOptions.price;
document.getElementById('viewDealMob').href = cardOptions.viewDeal;

