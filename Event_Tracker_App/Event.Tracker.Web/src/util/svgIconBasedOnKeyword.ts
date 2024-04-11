import { EventModel } from '@/types/types';
import airshow from '../resources/event_type_icons/airshow.svg';
import art from '../resources/event_type_icons/art.svg';
import athletics from '../resources/event_type_icons/athletics.svg';
import ballet from '../resources/event_type_icons/ballet.svg';
import basketball from '../resources/event_type_icons/basketball.svg';
import beer from '../resources/event_type_icons/beer.svg';
import birthday from '../resources/event_type_icons/birthday.svg';
import blues from '../resources/event_type_icons/blues.svg';
import book from '../resources/event_type_icons/book.svg';
import business from '../resources/event_type_icons/business.svg';
import cat from '../resources/event_type_icons/cat.svg';
import charity from '../resources/event_type_icons/charity.svg';
import chess from '../resources/event_type_icons/chess.svg';
import classical from '../resources/event_type_icons/classical.svg';
import classiccar from '../resources/event_type_icons/classiccar.svg';
import club from '../resources/event_type_icons/club.svg';
import coding from '../resources/event_type_icons/coding.svg';
import comedy from '../resources/event_type_icons/comedy.svg';
import concert from '../resources/event_type_icons/concert.svg';
import cooking from '../resources/event_type_icons/cooking.svg';
import cycling from '../resources/event_type_icons/cycling.svg';
import dance from '../resources/event_type_icons/dancing.svg';
import dj from '../resources/event_type_icons/dj.svg';
import dog from '../resources/event_type_icons/dog.svg';
import entrepreneur from '../resources/event_type_icons/entrepreneurship.svg';
import enviromental from '../resources/event_type_icons/enviromentals.svg';
import expedition from '../resources/event_type_icons/expedition.svg';
import family from '../resources/event_type_icons/family.svg';
import fashion from '../resources/event_type_icons/fashion.svg';
import filmmaking from '../resources/event_type_icons/filmmaking.svg';
import financial from '../resources/event_type_icons/financial.svg';
import fishing from '../resources/event_type_icons/fishing.svg';
import fitness from '../resources/event_type_icons/fitness.svg';
import food from '../resources/event_type_icons/food.svg';
import football from '../resources/event_type_icons/football.svg';
import gaming from '../resources/event_type_icons/gaming.svg';
import golf from '../resources/event_type_icons/golf.svg';
import jazz from '../resources/event_type_icons/jazz.svg';
import karaoke from '../resources/event_type_icons/karaoke.svg';
import kid from '../resources/event_type_icons/kid.svg';
import language from '../resources/event_type_icons/language.svg';
import mindfulness from '../resources/event_type_icons/mindfulness.svg';
import money from '../resources/event_type_icons/money.svg';
import nature from '../resources/event_type_icons/nature.svg';
import parenting from '../resources/event_type_icons/parenting.svg';
import photography from '../resources/event_type_icons/photography.svg';
import pride from '../resources/event_type_icons/pride.svg';
import realestate from '../resources/event_type_icons/realestate.svg';
import recycling from '../resources/event_type_icons/recycling.svg';
import running from '../resources/event_type_icons/running.svg';
import sailing from '../resources/event_type_icons/sailing.svg';
import science from '../resources/event_type_icons/science.svg';
import singing from '../resources/event_type_icons/singing.svg';
import singles from '../resources/event_type_icons/singles.svg';
import skateboard from '../resources/event_type_icons/skateboard.svg';
import spa from '../resources/event_type_icons/spa.svg';
import speeddating from '../resources/event_type_icons/speeddating.svg';
import squash from '../resources/event_type_icons/squash.svg';
import streetfood from '../resources/event_type_icons/streetfood.svg';
import tech from '../resources/event_type_icons/tech.svg';
import tennis from '../resources/event_type_icons/tennis.svg';
import vip from '../resources/event_type_icons/vip.svg';
import volunteer from '../resources/event_type_icons/volunteer.svg';
import wildlife from '../resources/event_type_icons/wildlife.svg';
import wine from '../resources/event_type_icons/wine.svg';
import writing from '../resources/event_type_icons/writing.svg';
import yoga from '../resources/event_type_icons/yoga.svg';


export const svgIconBasedOnKeyword = (event: EventModel) => {
    const name = event.name.toLocaleLowerCase();
    const description = event.description.toLocaleLowerCase();
    const keywords = event.keywords.concat([name, description]);

    if (keywords.some(keyword => airshowKeywords.includes(keyword))) {
        return airshow;
    }
    if (keywords.some(keyword => artKeywords.includes(keyword))) {
        return art;
    }
    if (keywords.some(keyword => athleticsKeywords.includes(keyword))) {
        return athletics;
    }
    if (keywords.some(keyword => danceKeywords.includes(keyword))) {
        return dance;
    }
    if (keywords.some(keyword => balletKeywords.includes(keyword))) {
        return ballet;
    }
    if (keywords.some(keyword => classicalKeywords.includes(keyword))) {
        return classical;
    }
    if (keywords.some(keyword => classiccarKeywords.includes(keyword))) {
        return classiccar;
    }
    if (keywords.some(keyword => clubKeywords.includes(keyword))) {
        return club;
    }
    if (keywords.some(keyword => codingKeywords.includes(keyword))) {
        return coding;
    }
    if (keywords.some(keyword => comedyKeywords.includes(keyword))) {
        return comedy;
    }
    if (keywords.some(keyword => concertKeywords.includes(keyword))) {
        return concert;
    }
    if (keywords.some(keyword => cookingKeywords.includes(keyword))) {
        return cooking;
    }
    if (keywords.some(keyword => cyclingKeywords.includes(keyword))) {
        return cycling;
    }
    if (keywords.some(keyword => yogaKeywords.includes(keyword))) {
        return yoga;
    }
    if (keywords.some(keyword => writingKeywords.includes(keyword))) {
        return writing;
    }
    if (keywords.some(keyword => dogKeywords.includes(keyword))) {
        return dog;
    }
    if (keywords.some(keyword => entrepreneurKeywords.includes(keyword))) {
        return entrepreneur;
    }
    if (keywords.some(keyword => environmentalKeywords.includes(keyword))) {
        return enviromental;
    }
    if (keywords.some(keyword => basketballKeywords.includes(keyword))) {
        return basketball;
    }
    if (keywords.some(keyword => beerKeywords.includes(keyword))) {
        return beer;
    }
    if (keywords.some(keyword => birthdayKeywords.includes(keyword))) {
        return birthday;
    }
    if (keywords.some(keyword => bluesKeywords.includes(keyword))) {
        return blues;
    }
    if (keywords.some(keyword => bookKeywords.includes(keyword))) {
        return book;
    }
    if (keywords.some(keyword => businessKeywords.includes(keyword))) {
        return business;
    }
    if (keywords.some(keyword => catKeywords.includes(keyword))) {
        return cat;
    }
    if (keywords.some(keyword => charityKeywords.includes(keyword))) {
        return charity;
    }
    if (keywords.some(keyword => chessKeywords.includes(keyword))) {
        return chess;
    }
    if (keywords.some(keyword => expeditionKeywords.includes(keyword))) {
        return expedition;
    }
    if (keywords.some(keyword => familyKeywords.includes(keyword))) {
        return family;
    }
    if (keywords.some(keyword => fashionKeywords.includes(keyword))) {
        return fashion;
    }
    if (keywords.some(keyword => filmmakingKeywords.includes(keyword))) {
        return filmmaking;
    }
    if (keywords.some(keyword => financialKeywords.includes(keyword))) {
        return financial;
    }
    if (keywords.some(keyword => fishingKeywords.includes(keyword))) {
        return fishing;
    }
    if (keywords.some(keyword => fitnessKeywords.includes(keyword))) {
        return fitness;
    }
    if (keywords.some(keyword => foodKeywords.includes(keyword))) {
        return food;
    }
    if (keywords.some(keyword => footballKeywords.includes(keyword))) {
        return football;
    }
    if (keywords.some(keyword => gamingKeywords.includes(keyword))) {
        return gaming;
    }
    if (keywords.some(keyword => golfKeywords.includes(keyword))) {
        return golf;
    }
    if (keywords.some(keyword => jazzKeywords.includes(keyword))) {
        return jazz;
    }
    if (keywords.some(keyword => karaokeKeywords.includes(keyword))) {
        return karaoke;
    }
    if (keywords.some(keyword => kidKeywords.includes(keyword))) {
        return kid;
    }
    if (keywords.some(keyword => languageKeywords.includes(keyword))) {
        return language;
    }
    if (keywords.some(keyword => mindfulnessKeywords.includes(keyword))) {
        return mindfulness;
    }
    if (keywords.some(keyword => moneyKeywords.includes(keyword))) {
        return money;
    }
    if (keywords.some(keyword => natureKeywords.includes(keyword))) {
        return nature;
    }
    if (keywords.some(keyword => parentingKeywords.includes(keyword))) {
        return parenting;
    }
    if (keywords.some(keyword => photographyKeywords.includes(keyword))) {
        return photography;
    }
    if (keywords.some(keyword => prideKeywords.includes(keyword))) {
        return pride;
    }
    if (keywords.some(keyword => realestateKeywords.includes(keyword))) {
        return realestate;
    }
    if (keywords.some(keyword => recyclingKeywords.includes(keyword))) {
        return recycling;
    }
    if (keywords.some(keyword => runningKeywords.includes(keyword))) {
        return running;
    }
    if (keywords.some(keyword => sailingKeywords.includes(keyword))) {
        return sailing;
    }
    if (keywords.some(keyword => scienceKeywords.includes(keyword))) {
        return science;
    }
    if (keywords.some(keyword => singingKeywords.includes(keyword))) {
        return singing;
    }
    if (keywords.some(keyword => singlesKeywords.includes(keyword))) {
        return singles;
    }
    if (keywords.some(keyword => skateboardKeywords.includes(keyword))) {
        return skateboard;
    }
    if (keywords.some(keyword => spaKeywords.includes(keyword))) {
        return spa;
    }
    if (keywords.some(keyword => speeddatingKeywords.includes(keyword))) {
        return speeddating;
    }
    if (keywords.some(keyword => squashKeywords.includes(keyword))) {
        return squash;
    }
    if (keywords.some(keyword => streetfoodKeywords.includes(keyword))) {
        return streetfood;
    }
    if (keywords.some(keyword => techKeywords.includes(keyword))) {
        return tech;
    }
    if (keywords.some(keyword => tennisKeywords.includes(keyword))) {
        return tennis;
    }
    if (keywords.some(keyword => vipKeywords.includes(keyword))) {
        return vip;
    }
    if (keywords.some(keyword => volunteerKeywords.includes(keyword))) {
        return volunteer;
    }
    if (keywords.some(keyword => wildlifeKeywords.includes(keyword))) {
        return wildlife;
    }
    if (keywords.some(keyword => wineKeywords.includes(keyword))) {
        return wine;
    }

    return dj;
};

const airshowKeywords = ["airshow", "aircraft", "aerobatics"];
const artKeywords = ["art", "painting", "sculpture", "gallery"];
const athleticsKeywords = ["athletics", "track and field", "sports"];
const balletKeywords = ["ballet", "dance", "performing arts"];
const basketballKeywords = ["basketball", "hoops", "NBA"];
const beerKeywords = ["beer", "brewery", "ale", "lager"];
const birthdayKeywords = ["birthday", "celebration", "party"];
const bluesKeywords = ["blues", "music", "jazz"];
const bookKeywords = ["book", "reading", "literature", "novel"];
const businessKeywords = ["business", "enterprise", "startup"];
const catKeywords = ["cat", "feline", "pet"];
const charityKeywords = ["charity", "fundraiser", "non-profit"];
const chessKeywords = ["chess", "strategy", "board game"];
const classicalKeywords = ["classical music", "orchestra", "symphony"];
const classiccarKeywords = ["classic car", "vintage car", "auto show"];
const clubKeywords = ["club", "nightlife", "party", "DJ"];
const codingKeywords = ["coding", "programming", "software development"];
const comedyKeywords = ["comedy", "stand-up", "humor"];
const concertKeywords = ["concert", "live music", "performance"];
const cookingKeywords = ["cooking", "culinary", "food", "recipes"];
const cyclingKeywords = ["cycling", "biking", "bicycle"];
const writingKeywords = ["writing", "authoring", "blogging"];
const danceKeywords = ["dance", "salsa", "latin dance", "ballroom"];
const dogKeywords = ["dog", "canine", "pet"];
const entrepreneurKeywords = ["entrepreneur", "business", "startup", "business owner"];
const environmentalKeywords = ["environmental", "eco-friendly", "conservation"];
const expeditionKeywords = ["expedition", "adventure", "exploration"];
const familyKeywords = ["family", "relatives", "family gathering"];
const fashionKeywords = ["fashion", "clothing", "apparel"];
const filmmakingKeywords = ["filmmaking", "cinema", "movie production"];
const financialKeywords = ["financial", "finance", "money management"];
const fishingKeywords = ["fishing", "angling", "fish"];
const fitnessKeywords = ["fitness", "exercise", "gym"];
const foodKeywords = ["food", "cuisine", "gastronomy"];
const footballKeywords = ["football", "soccer", "sports"];
const gamingKeywords = ["gaming", "video games", "esports"];
const golfKeywords = ["golf", "putting", "greens"];
const jazzKeywords = ["jazz", "music", "improvisation"];
const karaokeKeywords = ["karaoke", "singing", "music entertainment"];
const kidKeywords = ["kid", "child", "children activities"];
const languageKeywords = ["language", "linguistics", "speech"];
const mindfulnessKeywords = ["mindfulness", "meditation", "well-being"];
const moneyKeywords = ["money", "finance", "economics"];
const natureKeywords = ["nature", "outdoors", "wildlife"];
const parentingKeywords = ["parenting", "child rearing", "family"];
const photographyKeywords = ["photography", "photographing", "camera"];
const prideKeywords = ["pride", "LGBTQ", "gay rights"];
const realestateKeywords = ["real estate", "property", "housing"];
const recyclingKeywords = ["recycling", "sustainability", "waste management"];
const runningKeywords = ["running", "jogging", "marathon"];
const sailingKeywords = ["sailing", "boating", "yachting"];
const scienceKeywords = ["science", "research", "experimentation"];
const singingKeywords = ["singing", "vocal", "music"];
const singlesKeywords = ["singles", "dating", "relationships"];
const skateboardKeywords = ["skateboard", "skating", "skatepark"];
const spaKeywords = ["spa", "relaxation", "wellness"];
const speeddatingKeywords = ["speed dating", "dating", "singles event"];
const squashKeywords = ["squash", "racket sport", "court"];
const streetfoodKeywords = ["street food", "food stall", "cuisine"];
const techKeywords = ["tech", "technology", "innovation"];
const tennisKeywords = ["tennis", "racket", "sports"];
const vipKeywords = ["vip", "exclusive", "luxury"];
const volunteerKeywords = ["volunteer", "charity", "community service"];
const wildlifeKeywords = ["wildlife", "animals", "nature conservation"];
const wineKeywords = ["wine", "vineyard", "winetasting"];
const yogaKeywords = ["yoga", "kundalini"];