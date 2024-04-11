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

import { airshowKeywords, artKeywords, athleticsKeywords, balletKeywords, basketballKeywords, 
    beerKeywords, birthdayKeywords, bluesKeywords, bookKeywords, businessKeywords, catKeywords, 
    charityKeywords, chessKeywords, classicalKeywords, classiccarKeywords, clubKeywords, codingKeywords, 
    comedyKeywords, concertKeywords, cookingKeywords, cyclingKeywords, danceKeywords, dogKeywords, 
    entrepreneurKeywords, environmentalKeywords, expeditionKeywords, familyKeywords, fashionKeywords, 
    filmmakingKeywords, financialKeywords, fishingKeywords, fitnessKeywords, foodKeywords, footballKeywords, 
    gamingKeywords, golfKeywords, jazzKeywords, karaokeKeywords, kidKeywords, languageKeywords, 
    mindfulnessKeywords, moneyKeywords, natureKeywords, parentingKeywords, photographyKeywords, 
    prideKeywords, realestateKeywords, recyclingKeywords, runningKeywords, sailingKeywords, scienceKeywords, 
    singingKeywords, singlesKeywords, skateboardKeywords, spaKeywords, speeddatingKeywords, squashKeywords,
    streetfoodKeywords, techKeywords, tennisKeywords, vipKeywords, volunteerKeywords, wildlifeKeywords, 
    wineKeywords, writingKeywords, yogaKeywords } from '@/Data/keywords';


export const svgIconBasedOnKeyword = (event: EventModel) => {
    const name = event.name.toLocaleLowerCase();
    const description = event.description.toLocaleLowerCase();
    const keywords = event.keywords.concat([name, description]);

    if (keywords.some(keyword => airshowKeywords.includes(keyword.toLowerCase()))) {
        return airshow;
    }
    if (keywords.some(keyword => cookingKeywords.includes(keyword.toLowerCase()))) {
        return cooking;
    }
    if (keywords.some(keyword => artKeywords.includes(keyword.toLowerCase()))) {
        return art;
    }
    if (keywords.some(keyword => athleticsKeywords.includes(keyword.toLowerCase()))) {
        return athletics;
    }
    if (keywords.some(keyword => foodKeywords.includes(keyword.toLowerCase()))) {
        return food;
    }
    if (keywords.some(keyword => danceKeywords.includes(keyword.toLowerCase()))) {
        return dance;
    }
    if (keywords.some(keyword => balletKeywords.includes(keyword.toLowerCase()))) {
        return ballet;
    }
    if (keywords.some(keyword => classicalKeywords.includes(keyword.toLowerCase()))) {
        return classical;
    }
    if (keywords.some(keyword => classiccarKeywords.includes(keyword.toLowerCase()))) {
        return classiccar;
    }
    if (keywords.some(keyword => clubKeywords.includes(keyword.toLowerCase()))) {
        return club;
    }
    if (keywords.some(keyword => codingKeywords.includes(keyword.toLowerCase()))) {
        return coding;
    }
    if (keywords.some(keyword => comedyKeywords.includes(keyword.toLowerCase()))) {
        return comedy;
    }
    if (keywords.some(keyword => concertKeywords.includes(keyword.toLowerCase()))) {
        return concert;
    }
    if (keywords.some(keyword => cyclingKeywords.includes(keyword.toLowerCase()))) {
        return cycling;
    }
    if (keywords.some(keyword => yogaKeywords.includes(keyword.toLowerCase()))) {
        return yoga;
    }
    if (keywords.some(keyword => writingKeywords.includes(keyword.toLowerCase()))) {
        return writing;
    }
    if (keywords.some(keyword => dogKeywords.includes(keyword.toLowerCase()))) {
        return dog;
    }
    if (keywords.some(keyword => entrepreneurKeywords.includes(keyword.toLowerCase()))) {
        return entrepreneur;
    }
    if (keywords.some(keyword => environmentalKeywords.includes(keyword.toLowerCase()))) {
        return enviromental;
    }
    if (keywords.some(keyword => basketballKeywords.includes(keyword.toLowerCase()))) {
        return basketball;
    }
    if (keywords.some(keyword => beerKeywords.includes(keyword.toLowerCase()))) {
        return beer;
    }
    if (keywords.some(keyword => birthdayKeywords.includes(keyword.toLowerCase()))) {
        return birthday;
    }
    if (keywords.some(keyword => bluesKeywords.includes(keyword.toLowerCase()))) {
        return blues;
    }
    if (keywords.some(keyword => bookKeywords.includes(keyword.toLowerCase()))) {
        return book;
    }
    if (keywords.some(keyword => businessKeywords.includes(keyword.toLowerCase()))) {
        return business;
    }
    if (keywords.some(keyword => catKeywords.includes(keyword.toLowerCase()))) {
        return cat;
    }
    if (keywords.some(keyword => charityKeywords.includes(keyword.toLowerCase()))) {
        return charity;
    }
    if (keywords.some(keyword => chessKeywords.includes(keyword.toLowerCase()))) {
        return chess;
    }
    if (keywords.some(keyword => expeditionKeywords.includes(keyword.toLowerCase()))) {
        return expedition;
    }
    if (keywords.some(keyword => familyKeywords.includes(keyword.toLowerCase()))) {
        return family;
    }
    if (keywords.some(keyword => fashionKeywords.includes(keyword.toLowerCase()))) {
        return fashion;
    }
    if (keywords.some(keyword => filmmakingKeywords.includes(keyword.toLowerCase()))) {
        return filmmaking;
    }
    if (keywords.some(keyword => financialKeywords.includes(keyword.toLowerCase()))) {
        return financial;
    }
    if (keywords.some(keyword => fishingKeywords.includes(keyword.toLowerCase()))) {
        return fishing;
    }
    if (keywords.some(keyword => fitnessKeywords.includes(keyword.toLowerCase()))) {
        return fitness;
    }
    if (keywords.some(keyword => footballKeywords.includes(keyword.toLowerCase()))) {
        return football;
    }
    if (keywords.some(keyword => gamingKeywords.includes(keyword.toLowerCase()))) {
        return gaming;
    }
    if (keywords.some(keyword => golfKeywords.includes(keyword.toLowerCase()))) {
        return golf;
    }
    if (keywords.some(keyword => jazzKeywords.includes(keyword.toLowerCase()))) {
        return jazz;
    }
    if (keywords.some(keyword => karaokeKeywords.includes(keyword.toLowerCase()))) {
        return karaoke;
    }
    if (keywords.some(keyword => kidKeywords.includes(keyword.toLowerCase()))) {
        return kid;
    }
    if (keywords.some(keyword => languageKeywords.includes(keyword.toLowerCase()))) {
        return language;
    }
    if (keywords.some(keyword => mindfulnessKeywords.includes(keyword.toLowerCase()))) {
        return mindfulness;
    }
    if (keywords.some(keyword => moneyKeywords.includes(keyword.toLowerCase()))) {
        return money;
    }
    if (keywords.some(keyword => natureKeywords.includes(keyword.toLowerCase()))) {
        return nature;
    }
    if (keywords.some(keyword => parentingKeywords.includes(keyword.toLowerCase()))) {
        return parenting;
    }
    if (keywords.some(keyword => photographyKeywords.includes(keyword.toLowerCase()))) {
        return photography;
    }
    if (keywords.some(keyword => prideKeywords.includes(keyword.toLowerCase()))) {
        return pride;
    }
    if (keywords.some(keyword => realestateKeywords.includes(keyword.toLowerCase()))) {
        return realestate;
    }
    if (keywords.some(keyword => recyclingKeywords.includes(keyword.toLowerCase()))) {
        return recycling;
    }
    if (keywords.some(keyword => runningKeywords.includes(keyword.toLowerCase()))) {
        return running;
    }
    if (keywords.some(keyword => sailingKeywords.includes(keyword.toLowerCase()))) {
        return sailing;
    }
    if (keywords.some(keyword => scienceKeywords.includes(keyword.toLowerCase()))) {
        return science;
    }
    if (keywords.some(keyword => singingKeywords.includes(keyword.toLowerCase()))) {
        return singing;
    }
    if (keywords.some(keyword => singlesKeywords.includes(keyword.toLowerCase()))) {
        return singles;
    }
    if (keywords.some(keyword => skateboardKeywords.includes(keyword.toLowerCase()))) {
        return skateboard;
    }
    if (keywords.some(keyword => spaKeywords.includes(keyword.toLowerCase()))) {
        return spa;
    }
    if (keywords.some(keyword => speeddatingKeywords.includes(keyword.toLowerCase()))) {
        return speeddating;
    }
    if (keywords.some(keyword => squashKeywords.includes(keyword.toLowerCase()))) {
        return squash;
    }
    if (keywords.some(keyword => streetfoodKeywords.includes(keyword.toLowerCase()))) {
        return streetfood;
    }
    if (keywords.some(keyword => techKeywords.includes(keyword.toLowerCase()))) {
        return tech;
    }
    if (keywords.some(keyword => tennisKeywords.includes(keyword.toLowerCase()))) {
        return tennis;
    }
    if (keywords.some(keyword => vipKeywords.includes(keyword.toLowerCase()))) {
        return vip;
    }
    if (keywords.some(keyword => volunteerKeywords.includes(keyword.toLowerCase()))) {
        return volunteer;
    }
    if (keywords.some(keyword => wildlifeKeywords.includes(keyword.toLowerCase()))) {
        return wildlife;
    }
    if (keywords.some(keyword => wineKeywords.includes(keyword.toLowerCase()))) {
        return wine;
    }

    return dj;
};