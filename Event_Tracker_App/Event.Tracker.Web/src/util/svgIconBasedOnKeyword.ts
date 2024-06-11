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
    const keywordInText = (keywords: string[], text: string): boolean => keywords.some(keyword => text.includes(keyword));

    const name = event.name.toLowerCase();
    const description = event.description.toLowerCase();
    const eventKeywords = event.keywords.map(keyword => keyword.toLowerCase());

    const allTexts = [name, description, ...eventKeywords];

    
    if (allTexts.some(text => keywordInText(danceKeywords, text))) {
        return dance;
    }
    if (allTexts.some(text => keywordInText(clubKeywords, text))) {
        return club;
    }
    if (allTexts.some(text => keywordInText(concertKeywords, text))) {
        return concert;
    }
    if (allTexts.some(text => keywordInText(airshowKeywords, text))) {
        return airshow;
    }
    if (allTexts.some(text => keywordInText(artKeywords, text))) {
        return art;
    }
    if (allTexts.some(text => keywordInText(foodKeywords, text))) {
        return food;
    }
    if (allTexts.some(text => keywordInText(athleticsKeywords, text))) {
        return athletics;
    }
    if (allTexts.some(text => keywordInText(balletKeywords, text))) {
        return ballet;
    }
    if (allTexts.some(text => keywordInText(classicalKeywords, text))) {
        return classical;
    }
    if (allTexts.some(text => keywordInText(classiccarKeywords, text))) {
        return classiccar;
    }
    if (allTexts.some(text => keywordInText(codingKeywords, text))) {
        return coding;
    }
    if (allTexts.some(text => keywordInText(comedyKeywords, text))) {
        return comedy;
    }
    if (allTexts.some(text => keywordInText(cyclingKeywords, text))) {
        return cycling;
    }
    if (allTexts.some(text => keywordInText(yogaKeywords, text))) {
        return yoga;
    }
    if (allTexts.some(text => keywordInText(writingKeywords, text))) {
        return writing;
    }
    if (allTexts.some(text => keywordInText(dogKeywords, text))) {
        return dog;
    }
    if (allTexts.some(text => keywordInText(entrepreneurKeywords, text))) {
        return entrepreneur;
    }
    if (allTexts.some(text => keywordInText(environmentalKeywords, text))) {
        return enviromental;
    }
    if (allTexts.some(text => keywordInText(basketballKeywords, text))) {
        return basketball;
    }
    if (allTexts.some(text => keywordInText(beerKeywords, text))) {
        return beer;
    }
    if (allTexts.some(text => keywordInText(birthdayKeywords, text))) {
        return birthday;
    }
    if (allTexts.some(text => keywordInText(bluesKeywords, text))) {
        return blues;
    }
    if (allTexts.some(text => keywordInText(bookKeywords, text))) {
        return book;
    }
    if (allTexts.some(text => keywordInText(businessKeywords, text))) {
        return business;
    }
    if (allTexts.some(text => keywordInText(catKeywords, text))) {
        return cat;
    }
    if (allTexts.some(text => keywordInText(charityKeywords, text))) {
        return charity;
    }
    if (allTexts.some(text => keywordInText(cookingKeywords, text))) {
        return cooking;
    }
    if (allTexts.some(text => keywordInText(chessKeywords, text))) {
        return chess;
    }
    if (allTexts.some(text => keywordInText(expeditionKeywords, text))) {
        return expedition;
    }
    if (allTexts.some(text => keywordInText(familyKeywords, text))) {
        return family;
    }
    if (allTexts.some(text => keywordInText(fashionKeywords, text))) {
        return fashion;
    }
    if (allTexts.some(text => keywordInText(filmmakingKeywords, text))) {
        return filmmaking;
    }
    if (allTexts.some(text => keywordInText(financialKeywords, text))) {
        return financial;
    }
    if (allTexts.some(text => keywordInText(fishingKeywords, text))) {
        return fishing;
    }
    if (allTexts.some(text => keywordInText(fitnessKeywords, text))) {
        return fitness;
    }
    if (allTexts.some(text => keywordInText(footballKeywords, text))) {
        return football;
    }
    if (allTexts.some(text => keywordInText(gamingKeywords, text))) {
        return gaming;
    }
    if (allTexts.some(text => keywordInText(golfKeywords, text))) {
        return golf;
    }
    if (allTexts.some(text => keywordInText(jazzKeywords, text))) {
        return jazz;
    }
    if (allTexts.some(text => keywordInText(karaokeKeywords, text))) {
        return karaoke;
    }
    if (allTexts.some(text => keywordInText(kidKeywords, text))) {
        return kid;
    }
    if (allTexts.some(text => keywordInText(languageKeywords, text))) {
        return language;
    }
    if (allTexts.some(text => keywordInText(mindfulnessKeywords, text))) {
        return mindfulness;
    }
    if (allTexts.some(text => keywordInText(moneyKeywords, text))) {
        return money;
    }
    if (allTexts.some(text => keywordInText(natureKeywords, text))) {
        return nature;
    }
    if (allTexts.some(text => keywordInText(parentingKeywords, text))) {
        return parenting;
    }
    if (allTexts.some(text => keywordInText(photographyKeywords, text))) {
        return photography;
    }
    if (allTexts.some(text => keywordInText(prideKeywords, text))) {
        return pride;
    }
    if (allTexts.some(text => keywordInText(realestateKeywords, text))) {
        return realestate;
    }
    if (allTexts.some(text => keywordInText(recyclingKeywords, text))) {
        return recycling;
    }
    if (allTexts.some(text => keywordInText(runningKeywords, text))) {
        return running;
    }
    if (allTexts.some(text => keywordInText(sailingKeywords, text))) {
        return sailing;
    }
    if (allTexts.some(text => keywordInText(scienceKeywords, text))) {
        return science;
    }
    if (allTexts.some(text => keywordInText(singingKeywords, text))) {
        return singing;
    }
    if (allTexts.some(text => keywordInText(singlesKeywords, text))) {
        return singles;
    }
    if (allTexts.some(text => keywordInText(skateboardKeywords, text))) {
        return skateboard;
    }
    if (allTexts.some(text => keywordInText(spaKeywords, text))) {
        return spa;
    }
    if (allTexts.some(text => keywordInText(speeddatingKeywords, text))) {
        return speeddating;
    }
    if (allTexts.some(text => keywordInText(squashKeywords, text))) {
        return squash;
    }
    if (allTexts.some(text => keywordInText(streetfoodKeywords, text))) {
        return streetfood;
    }
    if (allTexts.some(text => keywordInText(techKeywords, text))) {
        return tech;
    }
    if (allTexts.some(text => keywordInText(tennisKeywords, text))) {
        return tennis;
    }
    if (allTexts.some(text => keywordInText(vipKeywords, text))) {
        return vip;
    }
    if (allTexts.some(text => keywordInText(volunteerKeywords, text))) {
        return volunteer;
    }
    if (allTexts.some(text => keywordInText(wildlifeKeywords, text))) {
        return wildlife;
    }
    if (allTexts.some(text => keywordInText(wineKeywords, text))) {
        return wine;
    }

    return dj; 
};