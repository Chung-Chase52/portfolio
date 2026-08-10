const projectDetails = {
  "witti-launcher": {
    title: "Witti Launcher",
    eyebrow: "MINIGATE · EDUCATION LAUNCHER",
    period: "2025.01 — 현재",
    role: "Android 개발 · 운영",
    team: "미니게이트",
    status: "운영 중",
    summary:
      "유치원·어린이집·가정의 태블릿을 학습 단말로 바꿔주는 위티 생태계의 중심 런처입니다. 홈 화면을 대체해 학생별 학습 콘텐츠 실행과 단말 제어를 담당합니다.",
    tech: ["Kotlin", "Compose", "Hilt", "Ktor", "Knox", "Firebase"],
    tasks: [
      "학생 모드·게스트 모드와 학생 선택 UX를 구현했습니다.",
      "하이브리드 웹 콘텐츠를 위한 WebView Bridge를 연동했습니다.",
      "FCM 푸시, 세일즈킷, 학생 프로필 기능을 개발했습니다.",
      "Knox SDK 기반 단말 제어와 Crashlytics·Performance 운영 모니터링을 담당했습니다.",
    ],
    outcomes: [
      "2025년 AI 페어링을 처음 도입하고, CLAUDE.md에 저장소 구조와 규칙을 문서화했습니다.",
      "2025년 1월부터 559개 커밋을 쌓으며 상용 환경에서 지속적으로 운영하고 있습니다.",
    ],
    poster: { color: "#F4D35E", icon: "lucide:rocket", label: "EDUCATION LAUNCHER" },
    images: [],
  },
  wittibox: {
    title: "WittiBox",
    eyebrow: "MINIGATE · HYBRID EDUCATION PLATFORM",
    period: "2025.01 — 현재",
    role: "Android 재구축 · 운영",
    team: "미니게이트",
    status: "운영 중",
    summary:
      "납품이 막혀 있던 Java 레거시 프로젝트를 Kotlin과 Jetpack Compose로 전면 재구축한 유아 교육 플랫폼입니다. 기관용 B2G와 가정용 B2C를 하나의 코드베이스에서 운영합니다.",
    tech: ["Kotlin", "Compose", "Clean Architecture", "Hilt", "Ktor", "Knox", "GitLab CI/CD"],
    tasks: [
      "Java 레거시를 Kotlin·Compose·멀티모듈 구조로 100% 재구축했습니다.",
      "Knox 기반 키오스크와 Launcher·Updater 분리형 무중단 업데이트 구조를 설계했습니다.",
      "productFlavors로 Knox 기기와 범용 태블릿 배포 전략을 이원화했습니다.",
      "GitLab CI/CD와 사내 NAS 자동 업로드 파이프라인을 구축했습니다.",
      "B2C용 반응형 UI, Google Play Billing과 In-App Update를 통합했습니다.",
    ],
    outcomes: [
      "업데이트 불가와 납품 실패 상황을 해소하고 프로젝트 런칭 및 납품 계약 성사로 연결했습니다.",
      "B2G의 강한 기기 제어와 B2C의 범용성을 동시에 만족하는 확장 가능한 기반을 확보했습니다.",
    ],
    images: ["assets/projects/wittibox.png"],
  },
  "witti-parent": {
    title: "Witti Parent",
    eyebrow: "MINIGATE · PARENT COMPANION",
    period: "2026.04 — 현재",
    role: "Android 개발 · 운영",
    team: "미니게이트",
    status: "운영 중",
    summary:
      "로그인·자녀 연결·커리큘럼·학습 콘텐츠·뮤직박스를 제공하며 자녀 기기의 Witti Launcher와 함께 동작하는 학부모 앱입니다.",
    tech: ["Kotlin", "Compose", "Hilt", "Ktor", "Media3", "WebView Bridge"],
    tasks: [
      "네이티브 앱과 EMS 학부모 웹을 연결하는 WebView Bridge 구조를 구현했습니다.",
      "부모 인증 토큰 갱신 로직을 공통화했습니다.",
      "학생·게스트 모드 전환, TargetAge 연동, 자녀 선택 로직을 포함한 콘텐츠 실행 흐름을 개발했습니다.",
      "Media3 기반 뮤직박스와 인앱 업데이트를 적용하고 로깅 보안을 강화했습니다.",
    ],
    outcomes: [
      ".claude/rules로 저장소 규칙을 명문화해 AI 페어링을 일상 개발 흐름으로 정착시켰습니다.",
      "2026년 4월 이후 72개 커밋을 통해 기능 개발과 운영 리팩터링을 이어가고 있습니다.",
    ],
    poster: { color: "#FF8C69", icon: "lucide:users", label: "PARENT COMPANION" },
    images: [],
  },
  mywitti: {
    title: "MyWitti",
    eyebrow: "MINIGATE · AI-NATIVE BUILD",
    period: "2026.05 — 현재",
    role: "신규 설계 · Android 개발",
    team: "미니게이트",
    status: "운영 중",
    summary:
      "기획·디자인 스펙을 화면 단위로 구조화해 AI에 핸드오프하는 방식으로 처음부터 구축한 신규 학부모 앱입니다.",
    tech: ["Kotlin", "Compose", "Hilt", "Ktor", "Media3", "Unit Test"],
    tasks: [
      "로그인·자녀 관리·약관을 포함한 전체 플로우 33개 화면을 구현했습니다.",
      "컬러·타이포그래피·공통 컴포넌트를 Mw 디자인 시스템으로 토큰화했습니다.",
      "통합 로그인에서 자녀별 토큰으로 교체되는 인증 구조를 설계했습니다.",
      "mslp 서명과 관리 콘솔 업로드를 자동화하고 유닛 테스트를 작성했습니다.",
    ],
    outcomes: [
      "93개 커밋 중 54건, 58%를 AI 페어 커밋으로 진행했습니다.",
      "API를 직접 호출해 실측 검증하고 독립 서브에이전트 3중 검증을 통과해야 배포되는 휴먼 게이트를 유지했습니다.",
      "2026년 8월 기준 v1.0.7을 배포했습니다.",
    ],
    poster: { color: "#9EFFBF", icon: "lucide:sparkles", label: "AI-NATIVE BUILD" },
    images: [],
  },
  easyqr: {
    title: "이지큐알",
    eyebrow: "PERSONAL · QR UTILITY",
    period: "2024.11 — 2024.12",
    role: "기획·개발·배포 전 과정",
    team: "1인 개발",
    status: "완료",
    summary:
      "QR 스캔과 생성, 기록 관리를 제공하는 개인 프로젝트입니다. 실제 사용자에게 배포하기 위해 기획부터 스토어 심사 대응까지 혼자 진행했습니다.",
    tech: ["Kotlin", "Compose", "CameraX", "ML Kit", "Room", "Paging 3", "Crashlytics"],
    tasks: [
      "CameraX ImageAnalysis와 ML Kit를 연결해 실시간 바코드 인식을 구현했습니다.",
      "ZXing으로 QR 코드 생성과 비트맵 변환 로직을 개발했습니다.",
      "Room과 Paging 3를 연동해 대량 히스토리의 무한 스크롤을 구현했습니다.",
      "Play Console 등록, 심사 반려 대응, ProGuard·Keystore와 Crashlytics를 적용했습니다.",
    ],
    outcomes: [
      "앱 등록부터 최종 런칭까지 Google Play 배포 사이클 전체를 경험했습니다.",
      "광고·인앱 결제·오류 추적을 포함한 프로덕션 수준의 운영 항목을 직접 다뤘습니다.",
    ],
    images: ["assets/projects/easyqr.png"],
  },
  dessert39: {
    title: "디저트39",
    eyebrow: "DESSERT39 · CUSTOMER APP",
    period: "2024.01 — 2025.01",
    role: "Android 유지보수 · 화면 개발",
    team: "디저트39",
    status: "완료",
    summary:
      "디저트39 고객이 사용하는 상용 Android 앱입니다. 운영 중인 앱의 유지보수와 신규 화면 개발을 담당했습니다.",
    tech: ["Android", "Kotlin", "MVVM", "Compose"],
    tasks: [
      "운영 중인 고객용 앱의 유지보수와 이슈 대응을 수행했습니다.",
      "서비스 요구사항에 맞춘 추가 화면과 UI를 구현했습니다.",
    ],
    outcomes: [
      "사용자가 실제로 이용하는 상용 앱에서 안정적인 변경과 배포 흐름을 경험했습니다.",
    ],
    images: [
      "assets/projects/dessert39.jpg",
      "assets/projects/dessert39-2.jpg",
      "assets/projects/dessert39-3.jpg",
      "assets/projects/dessert39-4.jpg",
    ],
  },
  samgu: {
    title: "삼구AI헬퍼",
    eyebrow: "DESSERT39 · OWNER APP",
    period: "2024.01 — 2025.01",
    role: "초기 설정·전체 개발·배포",
    team: "디저트39",
    status: "완료",
    summary:
      "디저트39 점주가 매장과 실시간 주문을 관리하는 전용 앱입니다. 프로젝트 초기 설정부터 기능 구현과 배포까지 전체를 담당했습니다.",
    tech: ["Kotlin", "Compose", "Hilt", "Room", "DataStore", "Paging", "Firebase"],
    tasks: [
      "앱의 초기 프로젝트 설정부터 전체 기능 개발과 배포를 담당했습니다.",
      "점주용 태블릿 환경에 맞춘 화면과 비율 대응을 구현했습니다.",
      "Firebase Topic으로 실시간 주문 알림과 새로고침 동작을 연동했습니다.",
    ],
    outcomes: [
      "WindowSizeClass를 활용해 휴대전화와 태블릿에서 안정적으로 동작하는 적응형 화면을 구현했습니다.",
      "상용 점주 앱의 개발 생명주기를 처음부터 끝까지 주도했습니다.",
    ],
    images: [
      "assets/projects/samgu.jpg",
      "assets/projects/samgu-2.jpg",
      "assets/projects/samgu-3.jpg",
      "assets/projects/samgu-4.jpg",
    ],
  },
  onnuri: {
    title: "온누리",
    eyebrow: "HEALTHCARE · MEDICATION RECORD",
    period: "2023.05 — 2023.08",
    role: "Android 개발",
    team: "프로젝트 팀",
    status: "완료",
    summary:
      "온누리 약국에서 진료·처방받은 약의 복용 내역과 건강 기록을 관리하는 Android 앱입니다.",
    tech: ["Kotlin", "Compose", "MVVM", "Coroutines", "Hilt"],
    tasks: [
      "메인 화면과 복용 내역 확인 흐름을 구현했습니다.",
      "복용 중인 약을 직접 기록하고 그래프로 확인하는 기능을 개발했습니다.",
      "주변 약국·병원 찾기와 계정·공지 기능을 구현했습니다.",
    ],
    outcomes: [
      "XML 중심의 화면 개발에서 선언형 UI인 Jetpack Compose로 전환해 적용했습니다.",
    ],
    images: ["assets/projects/onnuri.jpg", "assets/projects/onnuri-2.jpg", "assets/projects/onnuri-3.jpg"],
  },
  hudadaq: {
    title: "후다닥",
    eyebrow: "HEALTHCARE · TELEMEDICINE",
    period: "2022.08 — 2023.03",
    role: "Android 개발",
    team: "Android 2 · iOS 2 · Server 1 · Design 1",
    status: "완료",
    summary:
      "원격진료 예약과 약 정보, 주변 병원·약국 정보를 제공하는 헬스케어 앱입니다.",
    tech: ["Kotlin", "MVVM", "Coroutines", "Hilt", "DataBinding"],
    tasks: [
      "메인 화면과 원격진료 예약 등록 기능을 구현했습니다.",
      "주변 약국·병원 찾기, 공지, 계정 복구와 좋아요 기능을 개발했습니다.",
      "API 비동기 처리 방식을 RxJava에서 Coroutines로 전환했습니다.",
    ],
    outcomes: [
      "기존 RxJava 흐름을 Coroutines 기반으로 전환하며 비동기 API 통신 구조를 익혔습니다.",
    ],
    images: ["assets/projects/hudadaq.jpg", "assets/projects/hudadaq-2.jpg", "assets/projects/hudadaq-3.jpg"],
  },
  blackyak: {
    title: "블랙야크 알파인클럽",
    eyebrow: "BLACKYAK · OUTDOOR PLATFORM",
    period: "2020.09 — 2023.08",
    role: "Android 화면·기능 약 90%",
    team: "Android 2 · iOS 1 · Server 1 · External Design 1",
    status: "완료",
    summary:
      "대한민국의 명산과 섬을 탐험하고 아웃도어 활동을 인증·공유하며 사람들과 연결되는 플랫폼입니다.",
    tech: ["Kotlin", "MVVM", "LiveData", "DataBinding", "RecyclerView", "Glide"],
    tasks: [
      "앱 전체 Android 화면의 90% 이상을 구현했습니다.",
      "메인, 피드, 사용자 프로필, 팔로우와 좋아요 기능을 개발했습니다.",
      "중첩 RecyclerView를 ViewType 기반 단일 목록 구조로 정리했습니다.",
      "화면 이동과 잦은 갱신에 대응하도록 ResultCode 기반 백스택 흐름을 관리했습니다.",
    ],
    outcomes: [
      "대규모 피드형 화면에서 복잡한 RecyclerView 구조와 재사용 가능한 어댑터 설계를 익혔습니다.",
      "3년 가까이 하나의 상용 앱을 개발하며 기능 확장과 운영 경험을 쌓았습니다.",
    ],
    images: ["assets/projects/blackyak.jpg", "assets/projects/blackyak-2.jpg", "assets/projects/blackyak-3.jpg"],
  },
};

const projectModal = document.querySelector("#project-modal");
const projectModalPanel = projectModal.querySelector(".project-modal-panel");
const projectMedia = document.querySelector("#project-detail-media");
const projectEyebrow = document.querySelector("#project-detail-eyebrow");
const projectTitle = document.querySelector("#project-detail-title");
const projectSummary = document.querySelector("#project-detail-summary");
const projectTags = document.querySelector("#project-detail-tags");
const projectTasks = document.querySelector("#project-detail-tasks");
const projectOutcomes = document.querySelector("#project-detail-outcomes");
const projectFacts = document.querySelector("#project-detail-facts");
const projectGallerySection = document.querySelector("#project-gallery-section");
const projectGallery = document.querySelector("#project-detail-gallery");
let projectLastFocused = null;
let projectOriginalTitle = document.title;

function makeDetailList(items, target) {
  target.replaceChildren();
  items.forEach((item, index) => {
    const listItem = document.createElement("li");
    listItem.className = "grid grid-cols-[2rem_1fr] gap-3 border-t border-[rgba(26,60,43,0.15)] py-4 text-sm leading-relaxed text-gray-700";

    const number = document.createElement("span");
    number.className = "font-mono text-[9px] font-bold opacity-40";
    number.textContent = String(index + 1).padStart(2, "0");

    const copy = document.createElement("span");
    copy.textContent = item;
    listItem.append(number, copy);
    target.append(listItem);
  });
}

function renderProjectPoster(project) {
  projectMedia.replaceChildren();
  projectMedia.style.background = project.poster.color;

  const poster = document.createElement("div");
  poster.className = "flex h-full min-h-[24rem] w-full items-end justify-between p-10 text-[#1A3C2B]";

  const labelWrap = document.createElement("div");
  const icon = document.createElement("iconify-icon");
  icon.setAttribute("icon", project.poster.icon);
  icon.className = "mb-6 text-6xl";
  const label = document.createElement("p");
  label.className = "font-mono text-[10px] font-bold tracking-[0.18em]";
  label.textContent = project.poster.label;
  labelWrap.append(icon, label);

  const mark = document.createElement("span");
  mark.className = "font-display text-8xl font-bold opacity-10";
  mark.textContent = "AI";
  poster.append(labelWrap, mark);
  projectMedia.append(poster);
}

function renderProjectImage(source, title) {
  projectMedia.replaceChildren();
  projectMedia.style.background = "#e9ede7";
  const image = document.createElement("img");
  image.src = source;
  image.alt = `${title} 프로젝트 화면`;
  projectMedia.append(image);
}

function renderProjectFacts(project) {
  const facts = [
    ["기간", project.period],
    ["담당", project.role],
    ["팀", project.team],
    ["상태", project.status],
  ];
  projectFacts.replaceChildren();
  facts.forEach(([term, description]) => {
    const wrapper = document.createElement("div");
    wrapper.className = "project-fact";
    const dt = document.createElement("dt");
    dt.className = "font-mono text-[8px] font-bold uppercase tracking-widest opacity-40";
    dt.textContent = term;
    const dd = document.createElement("dd");
    dd.className = "mt-2 text-sm font-bold leading-relaxed";
    dd.textContent = description;
    wrapper.append(dt, dd);
    projectFacts.append(wrapper);
  });
}

function renderProjectGallery(project) {
  projectGallery.replaceChildren();
  const hasGallery = project.images.length > 1;
  projectGallerySection.hidden = !hasGallery;
  if (!hasGallery) return;

  project.images.forEach((source, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.setAttribute("aria-label", `${project.title} 화면 ${index + 1} 크게 보기`);
    const image = document.createElement("img");
    image.src = source;
    image.alt = `${project.title} 화면 ${index + 1}`;
    image.loading = "lazy";
    image.decoding = "async";
    button.append(image);
    button.addEventListener("click", () => {
      renderProjectImage(source, project.title);
      projectModalPanel.scrollTo({ top: 0, behavior: "smooth" });
    });
    projectGallery.append(button);
  });
}

function openProjectDetail(projectId, updateHistory = true) {
  const project = projectDetails[projectId];
  if (!project) return;

  projectLastFocused = document.activeElement;
  projectEyebrow.textContent = `${project.eyebrow} · ${project.period}`;
  projectTitle.textContent = project.title;
  projectSummary.textContent = project.summary;
  projectTags.replaceChildren();
  project.tech.forEach((item) => {
    const tag = document.createElement("span");
    tag.className = "project-tag";
    tag.textContent = item;
    projectTags.append(tag);
  });
  makeDetailList(project.tasks, projectTasks);
  makeDetailList(project.outcomes, projectOutcomes);
  renderProjectFacts(project);
  renderProjectGallery(project);

  if (project.images.length) renderProjectImage(project.images[0], project.title);
  else renderProjectPoster(project);

  projectModal.hidden = false;
  document.body.classList.add("modal-open");
  document.title = `${project.title} | 천청일 포트폴리오`;
  projectModalPanel.scrollTop = 0;
  projectModal.querySelector(".project-modal-close").focus();

  const nextHash = `#project-${projectId}`;
  if (updateHistory && window.location.hash !== nextHash) {
    window.history.pushState({ projectId }, "", nextHash);
  }
}

function closeProjectDetail(updateHistory = true) {
  if (projectModal.hidden) return;
  projectModal.hidden = true;
  document.body.classList.remove("modal-open");
  document.title = projectOriginalTitle;
  if (updateHistory && window.location.hash.startsWith("#project-")) {
    window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
  }
  if (projectLastFocused instanceof HTMLElement) projectLastFocused.focus();
}

document.querySelectorAll(".project-card[data-project]").forEach((card) => {
  const project = projectDetails[card.dataset.project];
  if (!project) return;
  const button = document.createElement("button");
  button.type = "button";
  button.className = "project-open";
  const label = document.createElement("span");
  label.className = "sr-only";
  label.textContent = `${project.title} 상세 보기`;
  button.append(label);
  button.addEventListener("click", () => openProjectDetail(card.dataset.project));
  card.append(button);
});

document.querySelectorAll("[data-project-close]").forEach((button) => {
  button.addEventListener("click", () => closeProjectDetail());
});

projectModal.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeProjectDetail();
    return;
  }
  if (event.key !== "Tab") return;
  const focusable = [...projectModal.querySelectorAll("button:not([disabled]), a[href]")].filter(
    (element) => !element.closest("[hidden]"),
  );
  if (!focusable.length) return;
  const first = focusable[0];
  const last = focusable[focusable.length - 1];
  if (event.shiftKey && document.activeElement === first) {
    event.preventDefault();
    last.focus();
  } else if (!event.shiftKey && document.activeElement === last) {
    event.preventDefault();
    first.focus();
  }
});

window.addEventListener("popstate", () => {
  const projectId = window.location.hash.replace("#project-", "");
  if (window.location.hash.startsWith("#project-") && projectDetails[projectId]) {
    openProjectDetail(projectId, false);
  } else {
    closeProjectDetail(false);
  }
});

const initialProjectId = window.location.hash.replace("#project-", "");
if (window.location.hash.startsWith("#project-") && projectDetails[initialProjectId]) {
  openProjectDetail(initialProjectId, false);
}
