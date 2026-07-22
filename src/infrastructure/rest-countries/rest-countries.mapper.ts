import type { Country } from "@/entities/country/country.types";
import { calculateDensity, createSlug } from "@/entities/country/country.utils";
import type { RestCountry } from "./rest-countries.types";

function portugueseName(country: RestCountry) {
  return country.names.translations.por ?? country.names.translations.pt ?? {
    common: country.names.common,
    official: country.names.official,
  };
}

export function mapRestCountry(country: RestCountry): Country {
  const ptName = portugueseName(country);
  const areaKm2 = country.area?.kilometers;
  const alpha2 = country.codes.alpha_2.toLowerCase();

  return {
    id: country.codes.alpha_3,
    slug: createSlug(country.names.common),
    codes: {
      alpha2: country.codes.alpha_2.toUpperCase(),
      alpha3: country.codes.alpha_3.toUpperCase(),
      numeric: country.codes.ccn3,
    },
    names: {
      common: { "pt-BR": ptName.common, en: country.names.common },
      official: { "pt-BR": ptName.official, en: country.names.official },
    },
    aliases: country.names.alternates,
    flag: {
      emoji: country.flag.emoji,
      svgUrl: country.flag.svg,
      pngUrl: country.flag.png ?? `https://flags.restcountries.com/v5/w320/${alpha2}.png`,
      description: country.flag.description,
    },
    capital: country.capitals[0]
      ? {
          name: country.capitals[0].name,
          latitude: country.capitals[0].coordinates?.lat,
          longitude: country.capitals[0].coordinates?.lng,
        }
      : undefined,
    region: country.region,
    subregion: country.subregion,
    areaKm2,
    population: country.population,
    densityPerKm2: calculateDensity(country.population, areaKm2),
    borders: country.borders.map((code) => code.toUpperCase()),
    callingCodes: country.calling_codes.map(String).map((code) => code.startsWith("+") ? code : `+${code}`),
    currencies: country.currencies,
    languages: country.languages.map((language) => ({ code: language.iso_639_1 ?? language.iso_639_2, name: language.name })),
    timezones: country.timezones,
    tlds: country.tlds,
    coordinates: country.coordinates ? { latitude: country.coordinates.lat, longitude: country.coordinates.lng } : undefined,
  };
}
