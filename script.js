const API_ROOT = "https://pokeapi.co/api/v2";

const typeLabels = {
  normal: "ノーマル",
  fire: "ほのお",
  water: "みず",
  electric: "でんき",
  grass: "くさ",
  ice: "こおり",
  fighting: "かくとう",
  poison: "どく",
  ground: "じめん",
  flying: "ひこう",
  psychic: "エスパー",
  bug: "むし",
  rock: "いわ",
  ghost: "ゴースト",
  dragon: "ドラゴン",
  dark: "あく",
  steel: "はがね",
  fairy: "フェアリー",
};

const japaneseNameMap = {
  "フシギダネ": "bulbasaur",
  "フシギソウ": "ivysaur",
  "フシギバナ": "venusaur",
  "ヒトカゲ": "charmander",
  "リザード": "charmeleon",
  "リザードン": "charizard",
  "ゼニガメ": "squirtle",
  "カメール": "wartortle",
  "カメックス": "blastoise",
  "キャタピー": "caterpie",
  "トランセル": "metapod",
  "バタフリー": "butterfree",
  "ビードル": "weedle",
  "コクーン": "kakuna",
  "スピアー": "beedrill",
  "ポッポ": "pidgey",
  "ピジョン": "pidgeotto",
  "ピジョット": "pidgeot",
  "コラッタ": "rattata",
  "ラッタ": "raticate",
  "オニスズメ": "spearow",
  "オニドリル": "fearow",
  "アーボ": "ekans",
  "アーボック": "arbok",
  "ピカチュウ": "pikachu",
  "ライチュウ": "raichu",
  "サンド": "sandshrew",
  "サンドパン": "sandslash",
  "ニドラン♀": "nidoran-f",
  "ニドリーナ": "nidorina",
  "ニドクイン": "nidoqueen",
  "ニドラン♂": "nidoran-m",
  "ニドリーノ": "nidorino",
  "ニドキング": "nidoking",
  "ピッピ": "clefairy",
  "ピクシー": "clefable",
  "ロコン": "vulpix",
  "キュウコン": "ninetales",
  "プリン": "jigglypuff",
  "プクリン": "wigglytuff",
  "ズバット": "zubat",
  "ゴルバット": "golbat",
  "ナゾノクサ": "oddish",
  "クサイハナ": "gloom",
  "ラフレシア": "vileplume",
  "パラス": "paras",
  "パラセクト": "parasect",
  "コンパン": "venonat",
  "モルフォン": "venomoth",
  "ディグダ": "diglett",
  "ダグトリオ": "dugtrio",
  "ニャース": "meowth",
  "ペルシアン": "persian",
  "コダック": "psyduck",
  "ゴルダック": "golduck",
  "マンキー": "mankey",
  "オコリザル": "primeape",
  "ガーディ": "growlithe",
  "ウインディ": "arcanine",
  "ニョロモ": "poliwag",
  "ニョロゾ": "poliwhirl",
  "ニョロボン": "poliwrath",
  "ケーシィ": "abra",
  "ユンゲラー": "kadabra",
  "フーディン": "alakazam",
  "ワンリキー": "machop",
  "ゴーリキー": "machoke",
  "カイリキー": "machamp",
  "マダツボミ": "bellsprout",
  "ウツドン": "weepinbell",
  "ウツボット": "victreebel",
  "メノクラゲ": "tentacool",
  "ドククラゲ": "tentacruel",
  "イシツブテ": "geodude",
  "ゴローン": "graveler",
  "ゴローニャ": "golem",
  "ポニータ": "ponyta",
  "ギャロップ": "rapidash",
  "ヤドン": "slowpoke",
  "ヤドラン": "slowbro",
  "コイル": "magnemite",
  "レアコイル": "magneton",
  "カモネギ": "farfetchd",
  "ドードー": "doduo",
  "ドードリオ": "dodrio",
  "パウワウ": "seel",
  "ジュゴン": "dewgong",
  "ベトベター": "grimer",
  "ベトベトン": "muk",
  "シェルダー": "shellder",
  "パルシェン": "cloyster",
  "ゴース": "gastly",
  "ゴースト": "haunter",
  "ゲンガー": "gengar",
  "イワーク": "onix",
  "スリープ": "drowzee",
  "スリーパー": "hypno",
  "クラブ": "krabby",
  "キングラー": "kingler",
  "ビリリダマ": "voltorb",
  "マルマイン": "electrode",
  "タマタマ": "exeggcute",
  "ナッシー": "exeggutor",
  "カラカラ": "cubone",
  "ガラガラ": "marowak",
  "サワムラー": "hitmonlee",
  "エビワラー": "hitmonchan",
  "ベロリンガ": "lickitung",
  "ドガース": "koffing",
  "マタドガス": "weezing",
  "サイホーン": "rhyhorn",
  "サイドン": "rhydon",
  "ラッキー": "chansey",
  "モンジャラ": "tangela",
  "ガルーラ": "kangaskhan",
  "タッツー": "horsea",
  "シードラ": "seadra",
  "トサキント": "goldeen",
  "アズマオウ": "seaking",
  "ヒトデマン": "staryu",
  "スターミー": "starmie",
  "バリヤード": "mr-mime",
  "ストライク": "scyther",
  "ルージュラ": "jynx",
  "エレブー": "electabuzz",
  "ブーバー": "magmar",
  "カイロス": "pinsir",
  "ケンタロス": "tauros",
  "コイキング": "magikarp",
  "ギャラドス": "gyarados",
  "ラプラス": "lapras",
  "メタモン": "ditto",
  "イーブイ": "eevee",
  "シャワーズ": "vaporeon",
  "サンダース": "jolteon",
  "ブースター": "flareon",
  "ポリゴン": "porygon",
  "オムナイト": "omanyte",
  "オムスター": "omastar",
  "カブト": "kabuto",
  "カブトプス": "kabutops",
  "プテラ": "aerodactyl",
  "カビゴン": "snorlax",
  "フリーザー": "articuno",
  "サンダー": "zapdos",
  "ファイヤー": "moltres",
  "ミニリュウ": "dratini",
  "ハクリュー": "dragonair",
  "カイリュー": "dragonite",
  "ミュウツー": "mewtwo",
  "ミュウ": "mew",
  "ルカリオ": "lucario",
  "ゲッコウガ": "greninja",
  "ニンフィア": "sylveon",
  "ミミッキュ": "mimikyu-disguised",
  "ザシアン": "zacian",
  "コライドン": "koraidon",
  "ミライドン": "miraidon",
};

const nameLookup = {
  ...(window.pokemonNameMap ?? {}),
  ...japaneseNameMap,
};

const form = document.querySelector("#searchForm");
const input = document.querySelector("#pokemonInput");
const statusText = document.querySelector("#statusText");
const emptyState = document.querySelector("#emptyState");
const pokemonCard = document.querySelector("#pokemonCard");
const pokemonSprite = document.querySelector("#pokemonSprite");
const dexNumber = document.querySelector("#dexNumber");
const pokemonName = document.querySelector("#pokemonName");
const typeList = document.querySelector("#typeList");
const weaknessList = document.querySelector("#weaknessList");
const resistanceList = document.querySelector("#resistanceList");
const immuneList = document.querySelector("#immuneList");
const attackStrongList = document.querySelector("#attackStrongList");
const attackWeakList = document.querySelector("#attackWeakList");
const attackNoEffectList = document.querySelector("#attackNoEffectList");
const submitButton = form.querySelector("button");
const suggestionList = document.querySelector("#suggestionList");

const typeCache = new Map();
const japaneseNameEntries = Object.entries(nameLookup)
  .map(([name, identifier]) => ({ name, identifier }))
  .sort((a, b) => a.name.localeCompare(b.name, "ja"));
let activeSuggestionIndex = -1;
let currentSuggestions = [];

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  hideSuggestions();
  await searchPokemon(input.value);
});

input.addEventListener("input", () => {
  updateSuggestions(input.value);
});

input.addEventListener("focus", () => {
  updateSuggestions(input.value);
});

input.addEventListener("keydown", (event) => {
  if (suggestionList.classList.contains("hidden")) {
    return;
  }

  if (event.key === "ArrowDown") {
    event.preventDefault();
    moveActiveSuggestion(1);
  }

  if (event.key === "ArrowUp") {
    event.preventDefault();
    moveActiveSuggestion(-1);
  }

  if (event.key === "Enter" && activeSuggestionIndex >= 0) {
    event.preventDefault();
    selectSuggestion(currentSuggestions[activeSuggestionIndex]);
    form.requestSubmit();
  }

  if (event.key === "Escape") {
    hideSuggestions();
  }
});

document.addEventListener("click", (event) => {
  if (!form.contains(event.target)) {
    hideSuggestions();
  }
});

async function searchPokemon(rawKeyword) {
  const keyword = normalizeKeyword(rawKeyword);

  if (!keyword) {
    setStatus("ポケモン名を入力してください。");
    return;
  }

  setLoading(true);
  setStatus("検索しています...");

  try {
    const pokemon = await fetchJson(`${API_ROOT}/pokemon/${keyword}`);
    const species = await fetchJson(pokemon.species.url);
    const typeNames = pokemon.types
      .sort((a, b) => a.slot - b.slot)
      .map((entry) => entry.type.name);
    const matchup = await calculateMatchup(typeNames);

    renderPokemon(pokemon, species, typeNames, matchup);
    setStatus("");
  } catch (error) {
    console.error(error);
    pokemonCard.classList.add("hidden");
    emptyState.classList.remove("hidden");
    setStatus(getSearchErrorMessage(error));
  } finally {
    setLoading(false);
  }
}

function normalizeKeyword(value) {
  const trimmed = value.trim().normalize("NFKC");
  const japaneseKey = normalizeJapaneseName(trimmed);
  const mapped = nameLookup[japaneseKey];

  if (mapped) {
    return mapped;
  }

  return trimmed
    .toLowerCase()
    .replace(/[.']/g, "")
    .replace(/\s+/g, "-")
    .replace(/[♀]/g, "-f")
    .replace(/[♂]/g, "-m");
}

function normalizeJapaneseName(value) {
  return value
    .normalize("NFKC")
    .replace(/\s+/g, "")
    .replace(/[ぁ-ゖ]/g, (char) => String.fromCharCode(char.charCodeAt(0) + 0x60));
}

function updateSuggestions(value) {
  const query = normalizeJapaneseName(value);

  if (query.length < 1 || /^[0-9]+$/.test(query)) {
    hideSuggestions();
    return;
  }

  const startsWithMatches = [];
  const includesMatches = [];

  japaneseNameEntries.forEach((entry) => {
    if (entry.name.startsWith(query)) {
      startsWithMatches.push(entry);
      return;
    }

    if (entry.name.includes(query)) {
      includesMatches.push(entry);
    }
  });

  currentSuggestions = [...startsWithMatches, ...includesMatches].slice(0, 8);
  activeSuggestionIndex = -1;
  renderSuggestions();
}

function renderSuggestions() {
  suggestionList.replaceChildren();

  if (currentSuggestions.length === 0) {
    hideSuggestions();
    return;
  }

  currentSuggestions.forEach((suggestion, index) => {
    const option = document.createElement("button");
    option.type = "button";
    option.className = "suggestion-option";
    option.role = "option";
    option.id = `suggestion-${index}`;
    option.dataset.index = String(index);
    const nameText = document.createElement("span");
    const identifierText = document.createElement("span");
    nameText.textContent = suggestion.name;
    identifierText.className = "suggestion-number";
    identifierText.textContent = suggestion.identifier;
    option.append(nameText, identifierText);
    option.addEventListener("mousedown", (event) => {
      event.preventDefault();
      selectSuggestion(suggestion);
    });
    option.addEventListener("click", () => {
      form.requestSubmit();
    });
    suggestionList.append(option);
  });

  suggestionList.classList.remove("hidden");
  input.setAttribute("aria-expanded", "true");
}

function moveActiveSuggestion(direction) {
  activeSuggestionIndex =
    (activeSuggestionIndex + direction + currentSuggestions.length) %
    currentSuggestions.length;

  [...suggestionList.children].forEach((option, index) => {
    const isActive = index === activeSuggestionIndex;
    option.classList.toggle("active", isActive);
    option.setAttribute("aria-selected", String(isActive));
  });

  input.setAttribute("aria-activedescendant", `suggestion-${activeSuggestionIndex}`);
}

function selectSuggestion(suggestion) {
  input.value = suggestion.name;
  hideSuggestions();
}

function hideSuggestions() {
  currentSuggestions = [];
  activeSuggestionIndex = -1;
  suggestionList.classList.add("hidden");
  suggestionList.replaceChildren();
  input.setAttribute("aria-expanded", "false");
  input.removeAttribute("aria-activedescendant");
}

async function calculateMatchup(typeNames) {
  const defensiveMultipliers = createTypeMultiplierMap();
  const offensiveStrong = new Set();
  const offensiveWeak = new Set();
  const offensiveNoEffect = new Set();
  const typeDetails = await Promise.all(typeNames.map(fetchType));

  typeDetails.forEach((typeDetail) => {
    typeDetail.damage_relations.double_damage_from.forEach(({ name }) => {
      defensiveMultipliers[name] *= 2;
    });
    typeDetail.damage_relations.half_damage_from.forEach(({ name }) => {
      defensiveMultipliers[name] *= 0.5;
    });
    typeDetail.damage_relations.no_damage_from.forEach(({ name }) => {
      defensiveMultipliers[name] *= 0;
    });

    typeDetail.damage_relations.double_damage_to.forEach(({ name }) => {
      offensiveStrong.add(name);
    });
    typeDetail.damage_relations.half_damage_to.forEach(({ name }) => {
      offensiveWeak.add(name);
    });
    typeDetail.damage_relations.no_damage_to.forEach(({ name }) => {
      offensiveNoEffect.add(name);
    });
  });

  return {
    defense: {
      quadWeakness: pickTypes(defensiveMultipliers, (value) => value >= 4),
      weakness: pickTypes(defensiveMultipliers, (value) => value > 1),
      resistance: pickTypes(defensiveMultipliers, (value) => value > 0 && value < 1),
      immune: pickTypes(defensiveMultipliers, (value) => value === 0),
    },
    offense: {
      strong: sortTypeNames(offensiveStrong),
      weak: sortTypeNames(offensiveWeak),
      noEffect: sortTypeNames(offensiveNoEffect),
    },
  };
}

function createTypeMultiplierMap(initialValue = 1) {
  return Object.fromEntries(
    Object.keys(typeLabels).map((typeName) => [typeName, initialValue])
  );
}

async function fetchType(typeName) {
  if (!typeCache.has(typeName)) {
    typeCache.set(typeName, fetchJson(`${API_ROOT}/type/${typeName}`));
  }

  return typeCache.get(typeName);
}

async function fetchJson(url) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return response.json();
}

function renderPokemon(pokemon, species, typeNames, matchup) {
  const japaneseName = species.names.find((name) =>
    ["ja", "ja-Hrkt"].includes(name.language.name)
  );
  const displayName = japaneseName?.name ?? capitalize(pokemon.name);
  const sprite =
    pokemon.sprites.other["official-artwork"].front_default ??
    pokemon.sprites.front_default ??
    "";

  emptyState.classList.add("hidden");
  pokemonCard.classList.remove("hidden");
  pokemonSprite.src = sprite;
  pokemonSprite.alt = `${displayName}の画像`;
  dexNumber.textContent = `No. ${String(pokemon.id).padStart(4, "0")}`;
  pokemonName.textContent = displayName;

  renderTypeChips(typeList, typeNames);
  renderTypeChips(weaknessList, matchup.defense.weakness, "弱点なし", {
    markers: Object.fromEntries(
      matchup.defense.quadWeakness.map((typeName) => [typeName, "4x"])
    ),
  });
  renderTypeChips(resistanceList, matchup.defense.resistance, "耐性なし");
  renderTypeChips(immuneList, matchup.defense.immune, "無効なし");
  renderTypeChips(attackStrongList, matchup.offense.strong, "該当なし");
  renderTypeChips(attackWeakList, matchup.offense.weak, "該当なし");
  renderTypeChips(attackNoEffectList, matchup.offense.noEffect, "該当なし");
}

function renderTypeChips(container, typeNames, emptyLabel = "", options = {}) {
  container.replaceChildren();

  if (typeNames.length === 0 && emptyLabel) {
    const emptyChip = document.createElement("span");
    emptyChip.className = "type-pill none";
    emptyChip.textContent = emptyLabel;
    container.append(emptyChip);
    return;
  }

  typeNames.forEach((typeName) => {
    const chip = document.createElement("span");
    const marker = options.markers?.[typeName];
    chip.className = `type-pill ${typeName}`;

    if (marker) {
      const label = document.createElement("span");
      const markerText = document.createElement("span");
      chip.classList.add("marked");
      label.textContent = typeLabels[typeName] ?? typeName;
      markerText.className = "type-marker";
      markerText.textContent = marker;
      chip.append(label, markerText);
    } else {
      chip.textContent = typeLabels[typeName] ?? typeName;
    }

    container.append(chip);
  });
}

function sortTypeNames(names) {
  return [...names].sort((a, b) =>
    (typeLabels[a] ?? a).localeCompare(typeLabels[b] ?? b, "ja")
  );
}

function pickTypes(multipliers, predicate) {
  return Object.entries(multipliers)
    .filter(([, value]) => predicate(value))
    .sort((a, b) => b[1] - a[1] || typeLabels[a[0]].localeCompare(typeLabels[b[0]], "ja"))
    .map(([typeName]) => typeName);
}

function setStatus(message) {
  statusText.textContent = message;
}

function setLoading(isLoading) {
  submitButton.disabled = isLoading;
  input.disabled = isLoading;
}

function getSearchErrorMessage(error) {
  if (!navigator.onLine || error instanceof TypeError) {
    return "通信できないため検索できません。画面はオフラインでも開けますが、検索にはインターネット接続が必要です。";
  }

  return "見つかりませんでした。日本語名、英語名、または図鑑番号で試してください。";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1).replace(/-/g, " ");
}

if ("serviceWorker" in navigator) {
  document.documentElement.dataset.pwa = "checking";
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("./service-worker.js")
      .then(() => {
        document.documentElement.dataset.pwa = "ready";
      })
      .catch((error) => {
        document.documentElement.dataset.pwa = "failed";
        console.error("Service worker registration failed:", error);
      });
  });
} else {
  document.documentElement.dataset.pwa = "unsupported";
}
