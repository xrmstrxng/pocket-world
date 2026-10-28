import type { Country } from "@/entities/country/country.types";
import type { Locale } from "@/shared/types/locale";
import { afghanistanEditorial } from "./af";
import { antiguaAndBarbudaEditorial } from "./ag";
import { anguillaEditorial } from "./ai";
import { argentinaEditorial } from "./ar";
import { australiaEditorial } from "./au";
import { arubaEditorial } from "./aw";
import { barbadosEditorial } from "./bb";
import { belgiumEditorial } from "./be";
import { saintBarthelemyEditorial } from "./bl";
import { bermudaEditorial } from "./bm";
import { boliviaEditorial } from "./bo";
import { caribbeanNetherlandsEditorial } from "./bq";
import { brazilEditorial } from "./br";
import { bahamasEditorial } from "./bs";
import { belizeEditorial } from "./bz";
import { canadaEditorial } from "./ca";
import { switzerlandEditorial } from "./ch";
import { chileEditorial } from "./cl";
import { colombiaEditorial } from "./co";
import { costaRicaEditorial } from "./cr";
import { cubaEditorial } from "./cu";
import { curacaoEditorial } from "./cw";
import { germanyEditorial } from "./de";
import { denmarkEditorial } from "./dk";
import { dominicaEditorial } from "./dm";
import { dominicanRepublicEditorial } from "./do";
import { ecuadorEditorial } from "./ec";
import { finlandEditorial } from "./fi";
import { falklandIslandsEditorial } from "./fk";
import { franceEditorial } from "./fr";
import { unitedKingdomEditorial } from "./gb";
import { grenadaEditorial } from "./gd";
import { frenchGuianaEditorial } from "./gf";
import { greenlandEditorial } from "./gl";
import { guadeloupeEditorial } from "./gp";
import { guatemalaEditorial } from "./gt";
import { guyanaEditorial } from "./gy";
import { hondurasEditorial } from "./hn";
import { haitiEditorial } from "./ht";
import { irelandEditorial } from "./ie";
import { icelandEditorial } from "./is";
import { jamaicaEditorial } from "./jm";
import { japanEditorial } from "./jp";
import { saintKittsAndNevisEditorial } from "./kn";
import { caymanIslandsEditorial } from "./ky";
import { saintLuciaEditorial } from "./lc";
import { liechtensteinEditorial } from "./li";
import { luxembourgEditorial } from "./lu";
import { monacoEditorial } from "./mc";
import { saintMartinEditorial } from "./mf";
import { martiniqueEditorial } from "./mq";
import { montserratEditorial } from "./ms";
import { mexicoEditorial } from "./mx";
import { nigeriaEditorial } from "./ng";
import { nicaraguaEditorial } from "./ni";
import { netherlandsEditorial } from "./nl";
import { norwayEditorial } from "./no";
import { panamaEditorial } from "./pa";
import { peruEditorial } from "./pe";
import { saintPierreAndMiquelonEditorial } from "./pm";
import { puertoRicoEditorial } from "./pr";
import { paraguayEditorial } from "./py";
import { swedenEditorial } from "./se";
import { surinameEditorial } from "./sr";
import { elSalvadorEditorial } from "./sv";
import { sintMaartenEditorial } from "./sx";
import { turksAndCaicosIslandsEditorial } from "./tc";
import { trinidadAndTobagoEditorial } from "./tt";
import { usMinorOutlyingIslandsEditorial } from "./um";
import { unitedStatesEditorial } from "./us";
import { uruguayEditorial } from "./uy";
import { saintVincentAndTheGrenadinesEditorial } from "./vc";
import { venezuelaEditorial } from "./ve";
import { britishVirginIslandsEditorial } from "./vg";
import { usVirginIslandsEditorial } from "./vi";
import type { CountryEditorialContent, CountryEditorialView } from "./editorial.types";

export const editorialByAlpha2: Record<string, Record<Locale, CountryEditorialContent>> = {
  AF: afghanistanEditorial,
  AG: antiguaAndBarbudaEditorial,
  AI: anguillaEditorial,
  AR: argentinaEditorial,
  AU: australiaEditorial,
  AW: arubaEditorial,
  BB: barbadosEditorial,
  BE: belgiumEditorial,
  BL: saintBarthelemyEditorial,
  BM: bermudaEditorial,
  BO: boliviaEditorial,
  BQ: caribbeanNetherlandsEditorial,
  BR: brazilEditorial,
  BS: bahamasEditorial,
  BZ: belizeEditorial,
  CA: canadaEditorial,
  CH: switzerlandEditorial,
  CL: chileEditorial,
  CO: colombiaEditorial,
  CR: costaRicaEditorial,
  CU: cubaEditorial,
  CW: curacaoEditorial,
  DE: germanyEditorial,
  DK: denmarkEditorial,
  DM: dominicaEditorial,
  DO: dominicanRepublicEditorial,
  EC: ecuadorEditorial,
  FI: finlandEditorial,
  FK: falklandIslandsEditorial,
  FR: franceEditorial,
  GB: unitedKingdomEditorial,
  GD: grenadaEditorial,
  GF: frenchGuianaEditorial,
  GL: greenlandEditorial,
  GP: guadeloupeEditorial,
  GT: guatemalaEditorial,
  GY: guyanaEditorial,
  HN: hondurasEditorial,
  HT: haitiEditorial,
  IE: irelandEditorial,
  IS: icelandEditorial,
  JM: jamaicaEditorial,
  JP: japanEditorial,
  KN: saintKittsAndNevisEditorial,
  KY: caymanIslandsEditorial,
  LC: saintLuciaEditorial,
  LI: liechtensteinEditorial,
  LU: luxembourgEditorial,
  MC: monacoEditorial,
  MF: saintMartinEditorial,
  MQ: martiniqueEditorial,
  MS: montserratEditorial,
  MX: mexicoEditorial,
  NG: nigeriaEditorial,
  NI: nicaraguaEditorial,
  NL: netherlandsEditorial,
  NO: norwayEditorial,
  PA: panamaEditorial,
  PE: peruEditorial,
  PM: saintPierreAndMiquelonEditorial,
  PR: puertoRicoEditorial,
  PY: paraguayEditorial,
  SE: swedenEditorial,
  SR: surinameEditorial,
  SV: elSalvadorEditorial,
  SX: sintMaartenEditorial,
  TC: turksAndCaicosIslandsEditorial,
  TT: trinidadAndTobagoEditorial,
  UM: usMinorOutlyingIslandsEditorial,
  US: unitedStatesEditorial,
  UY: uruguayEditorial,
  VC: saintVincentAndTheGrenadinesEditorial,
  VE: venezuelaEditorial,
  VG: britishVirginIslandsEditorial,
  VI: usVirginIslandsEditorial,
};

const fallbackByLocale: Record<Locale, string> = {
  "pt-BR": "Este país ainda está recebendo conteúdo editorial detalhado. Os dados gerais apresentados acima já estão disponíveis.",
  en: "This country is still receiving detailed editorial content. The general data presented above is already available.",
};

export function getCountryEditorialContent(countryCode: string, locale: Locale): CountryEditorialView {
  const normalizedCode = countryCode.trim().toUpperCase();
  const content = editorialByAlpha2[normalizedCode]?.[locale] ?? null;

  return {
    content,
    fallback: fallbackByLocale[locale],
    isPlaceholder: content === null,
  };
}

export function getCountryEditorial(country: Country, locale: Locale): CountryEditorialView {
  return getCountryEditorialContent(country.codes.alpha2, locale);
}

export type {
  CountryEditorialContent,
  CountryEditorialView,
  EditorialReviewStatus,
  EditorialSection,
  EditorialSectionKey,
  EditorialSource,
  EditorialTier,
} from "./editorial.types";
