(() => {
  const translations = {
    en: {
      navProducts:"Products",navDownloads:"Downloads",navPremium:"Premium",navAbout:"About",navGetApp:"Get the app",
      eyebrow:"OFFICIAL PRODUCT WEBSITE",heroTitle:'Your entertainment.<br><span>On your terms.</span>',
      heroDescription:"Meet AtvTube — a software project built to bring a thoughtful viewing experience to your Android devices.",
      heroCta:"Explore downloads",heroSecondary:"Discover the apps",heroNote:"Official releases · Direct APK downloads · Product information",
      stripOne:"Independent software project",stripTwo:"Official release downloads",stripThree:"Android-focused experience",
      productsEyebrow:"THE PRODUCT FAMILY",productsTitle:'Choose your <span>AtvTube.</span>',productsIntro:"Explore the available editions and choose the release that matches your device and needs.",
      productMainTag:"MAIN PROJECT",productMainDescription:"The AtvTube project. Find product information, project updates and official release links.",
      productCobaltDescription:"The Cobalt edition of AtvTube. Check its release notes and download the latest available APK.",viewDownloads:"View downloads",
      downloadEyebrow:"GET THE OFFICIAL APP",downloadTitle:'Ready when <span>you are.</span>',downloadIntro:"Downloads are served from the project's GitHub Releases. Always check the release notes and device requirements before installing.",
      releaseCaption:"Official GitHub release",loading:"Loading…",latestVersion:"Latest version",published:"Published",releaseFallback:"Release information will appear here when configured.",
      openRelease:"Open release",allReleases:"View all releases",downloadDisclaimer:"Only install APK files from sources you trust. GitHub release availability depends on the repository's public release settings.",
      premiumEyebrow:"OPTIONAL PAID ACCESS",premiumTitle:'Support development.<br><span>Unlock more.</span>',
      premiumDescription:"AtvTube may offer an optional one-time lifetime unlock. The free APK remains available. Details, supported features, price and purchase availability will be published here when finalized.",
      premiumPointOne:"Optional purchase",premiumPointTwo:"One-time payment model",premiumPointThree:"Clear license information",premiumContact:"Contact about licensing",
      aboutEyebrow:"ABOUT THE PROJECT",aboutTitle:'Built independently.<br><span>Made with care.</span>',
      aboutDescription:"AtvTube is an independently developed software project. This website provides product information, official downloads and support resources. Product availability and features may vary by edition and release.",
      contactDeveloper:"Contact the developer",transparencyTitle:"Clear information matters.",transparencyText:"Review the policies and contact details before using or purchasing a product.",
      privacy:"Privacy",terms:"Terms",refund:"Refund policy",footerText:"An independent software project.",
      releaseReady:"Release available",releaseMissing:"No public release found",releaseError:"Could not load release",noApk:"No APK asset found",viewRelease:"View release",downloadApk:"Download APK",
      privacyTitle:"Privacy Policy",termsTitle:"Terms of Service",refundTitle:"Refund Policy",lastUpdated:"Last updated: replace this date before publishing.",
      legalIntro:"This page is a starter template. Review it carefully and replace every instruction in brackets with your actual business and product practices before publishing.",
      backHome:"Back to home",privacyBody:"<h2>Information we collect</h2><p>[Describe the information collected by the website, app, analytics tools and support channels. If you do not collect personal information, explain that accurately.]</p><h2>Downloads and third parties</h2><p>APK downloads may be delivered through GitHub Releases. GitHub may process technical information under its own privacy policy.</p><h2>Contact</h2><p>For privacy questions, contact <a href=\"mailto:CONTACT_EMAIL\" data-contact-link>CONTACT_EMAIL</a>.</p>",
      termsBody:"<h2>Software license</h2><p>AtvTube software is provided under the license terms published with the relevant product and release. Do not assume that downloading the APK grants paid features or rights not expressly stated.</p><h2>Use of the website</h2><p>Use the website and software lawfully. Product features, compatibility and availability may change between releases.</p><h2>Contact</h2><p>Questions: <a href=\"mailto:CONTACT_EMAIL\" data-contact-link>CONTACT_EMAIL</a>.</p>",
      refundBody:"<h2>Free downloads</h2><p>Free APK downloads do not involve a purchase from this website.</p><h2>Paid purchases</h2><p>[Describe the actual seller, payment provider, refund eligibility, request process, time limits and exceptions. Do not publish until this policy matches your payment provider's terms and applicable law.]</p><h2>Contact</h2><p>For purchase support, contact <a href=\"mailto:CONTACT_EMAIL\" data-contact-link>CONTACT_EMAIL</a>.</p>"
    },
    zh: {
      navProducts:"产品",navDownloads:"下载",navPremium:"高级授权",navAbout:"关于",navGetApp:"获取应用",
      eyebrow:"官方产品网站",heroTitle:'享受你的娱乐。<br><span>由你做主。</span>',
      heroDescription:"认识 AtvTube——一个致力于为 Android 设备带来更完善观看体验的软件项目。",
      heroCta:"查看下载",heroSecondary:"了解产品",heroNote:"官方版本 · APK 直接下载 · 产品信息",
      stripOne:"独立软件项目",stripTwo:"官方版本下载",stripThree:"专注 Android 体验",
      productsEyebrow:"产品系列",productsTitle:'选择你的 <span>AtvTube。</span>',productsIntro:"了解不同版本，并选择适合你的设备和需求的版本。",
      productMainTag:"主项目",productMainDescription:"AtvTube 项目。查看产品信息、项目动态和官方版本下载链接。",
      productCobaltDescription:"AtvTube 的 Cobalt 版本。查看版本说明并下载最新可用 APK。",viewDownloads:"查看下载",
      downloadEyebrow:"获取官方应用",downloadTitle:'随时为你 <span>准备就绪。</span>',downloadIntro:"安装包通过项目的 GitHub Releases 提供。安装前请查看版本说明和设备要求。",
      releaseCaption:"GitHub 官方发布",loading:"正在加载…",latestVersion:"最新版本",published:"发布时间",releaseFallback:"配置完成后将在此显示版本信息。",
      openRelease:"打开发布页面",allReleases:"查看全部版本",downloadDisclaimer:"请仅安装来自可信来源的 APK。GitHub 版本信息取决于仓库的公开发布设置。",
      premiumEyebrow:"可选付费授权",premiumTitle:'支持持续开发。<br><span>解锁更多功能。</span>',
      premiumDescription:"AtvTube 可能提供可选的一次性永久解锁。免费 APK 仍可使用。具体权益、支持功能、价格和购买方式将在确认后公布。",
      premiumPointOne:"可选购买",premiumPointTwo:"一次性付款模式",premiumPointThree:"清晰的授权说明",premiumContact:"咨询授权事宜",
      aboutEyebrow:"关于项目",aboutTitle:'独立开发。<br><span>用心打造。</span>',
      aboutDescription:"AtvTube 是一个独立开发的软件项目。本网站提供产品信息、官方下载和支持资源。不同版本的产品可用性和功能可能有所不同。",
      contactDeveloper:"联系开发者",transparencyTitle:"信息透明很重要。",transparencyText:"使用或购买产品前，请阅读相关政策并确认联系方式。",
      privacy:"隐私政策",terms:"服务条款",refund:"退款政策",footerText:"独立软件项目。",
      releaseReady:"已有可用版本",releaseMissing:"没有找到公开版本",releaseError:"无法加载版本信息",noApk:"没有找到 APK 文件",viewRelease:"查看发布页面",downloadApk:"下载 APK",
      privacyTitle:"隐私政策",termsTitle:"服务条款",refundTitle:"退款政策",lastUpdated:"最后更新：发布前请替换此日期。",
      legalIntro:"这是政策页面模板。正式发布前，请仔细审核，并将方括号中的提示替换为真实的业务和产品做法。",
      backHome:"返回首页",privacyBody:"<h2>我们收集的信息</h2><p>[请说明网站、应用、分析工具和客服渠道实际收集的信息。如果不收集个人信息，也请准确说明。]</p><h2>下载与第三方服务</h2><p>APK 下载可能由 GitHub Releases 提供。GitHub 可能依据其隐私政策处理技术信息。</p><h2>联系方式</h2><p>隐私相关问题请联系 <a href=\"mailto:CONTACT_EMAIL\" data-contact-link>CONTACT_EMAIL</a>。</p>",
      termsBody:"<h2>软件许可</h2><p>AtvTube 软件适用相应产品和版本随附的许可条款。下载 APK 并不自动代表获得付费功能或未明确授予的权利。</p><h2>网站使用</h2><p>请合法使用本网站和软件。不同版本的功能、兼容性和可用性可能发生变化。</p><h2>联系方式</h2><p>如有疑问，请联系 <a href=\"mailto:CONTACT_EMAIL\" data-contact-link>CONTACT_EMAIL</a>。</p>",
      refundBody:"<h2>免费下载</h2><p>通过本网站免费下载 APK 不涉及网站收款。</p><h2>付费购买</h2><p>[请填写真实销售主体、支付服务商、退款条件、申请流程、期限和例外情况。发布前应确保本政策符合支付平台条款和适用法律。]</p><h2>联系方式</h2><p>购买支持请联系 <a href=\"mailto:CONTACT_EMAIL\" data-contact-link>CONTACT_EMAIL</a>。</p>"
    }
  };
  const config=window.ATVTUBE_CONFIG||{};
  let lang=localStorage.getItem("atvtube-language")||"en";
  const t=(key)=>translations[lang][key]||translations.en[key]||key;
  function setLanguage(next){
    lang=next;localStorage.setItem("atvtube-language",lang);
    document.documentElement.lang=lang==="zh"?"zh-CN":"en";
    document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(translations[lang][key])el.innerHTML=translations[lang][key];});
    const toggle=document.getElementById("languageToggle");if(toggle)toggle.textContent=lang==="en"?"中文":"EN";
    document.querySelectorAll("[data-contact-link]").forEach(a=>{a.href=`mailto:${config.contactEmail||"CONTACT_EMAIL"}`;});
  }
  async function loadRelease(key){
    const card=document.querySelector(`[data-release-card="${key}"]`);if(!card)return;
    const repo=config.releases?.[key];const status=card.querySelector(".release-status");
    if(!repo?.owner||!repo?.repo){status.textContent=t("releaseMissing");return;}
    const base=`https://api.github.com/repos/${encodeURIComponent(repo.owner)}/${encodeURIComponent(repo.repo)}`;
    card.querySelector("[data-release-page]").href=`${base}/releases`;
    try{
      const response=await fetch(`${base}/releases/latest`,{headers:{Accept:"application/vnd.github+json"}});
      if(!response.ok)throw new Error("No latest release");
      const release=await response.json();
      const assets=Array.isArray(release.assets)?release.assets:[];
      const apk=assets.find(a=>a.name.toLowerCase().endsWith(".apk"));
      card.querySelector("[data-version]").textContent=release.tag_name||release.name||"Latest";
      const date=release.published_at?new Date(release.published_at):null;
      card.querySelector("[data-date]").textContent=date&&!Number.isNaN(date.valueOf())?date.toLocaleDateString(lang==="zh"?"zh-CN":"en-US",{year:"numeric",month:"short",day:"numeric"}):"—";
      const notes=(release.body||"").replace(/[#>*_`]/g," ").replace(/\s+/g," ").trim();
      card.querySelector("[data-notes]").textContent=notes.slice(0,170)||release.name||"Official release.";
      status.textContent=t("releaseReady");status.classList.add("ready");
      const button=card.querySelector("[data-download]");
      if(apk){button.href=apk.browser_download_url;button.removeAttribute("aria-disabled");button.querySelector("span").textContent=t("downloadApk");}
      else{button.href=release.html_url;button.removeAttribute("aria-disabled");button.querySelector("span").textContent=t("noApk");}
      card.querySelector("[data-release-page]").href=release.html_url;
    }catch(e){status.textContent=t("releaseMissing");card.querySelector("[data-notes]").textContent=t("releaseFallback");}
  }
  function init(){
    setLanguage(lang);document.getElementById("year").textContent=new Date().getFullYear();
    document.getElementById("languageToggle")?.addEventListener("click",()=>setLanguage(lang==="en"?"zh":"en"));
    const menu=document.getElementById("menuToggle"),nav=document.querySelector(".desktop-nav");
    menu?.addEventListener("click",()=>{const open=nav.classList.toggle("open");menu.setAttribute("aria-expanded",String(open));});
    nav?.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");menu?.setAttribute("aria-expanded","false");}));
    ["atvtube","cobalt"].forEach(loadRelease);
  }
  document.addEventListener("DOMContentLoaded",init);
})();
