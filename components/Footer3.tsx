import { core, socialMedia } from "@/data/index2";
import Image from "next/image";
import Link from "next/link";
import ContactCard from "./ui/ContactCardFooter";

const Footer = () => {
  return (
    <div className="relative mx-auto mt-20 flex max-w-[85rem] flex-col items-center justify-center overflow-clip px-5 pt-10 text-white sm:px-10 lg:pt-20">
      <div className="relative w-full pb-10 font-lexendDeca" id="footer">
        <div className="relative flex flex-col justify-around lg:flex-1 lg:flex-row">
          <div className="absolute -top-6 h-[10rem] w-[10rem] opacity-40 md:-top-72 md:h-[22rem] md:w-[22rem] lg:-top-12 lg:left-32 lg:h-[22rem] lg:w-[22rem]">
            <Image
              src="/images/temp-logo.png"
              className="z-0 saturate-0"
              alt="Default"
              layout="fill"
              objectFit="cover"
              priority
            />
          </div>
          <div className="z-50 ml-2 mt-12 md:ml-0 md:mt-20">
            <h1 className="z-10 mt-2 text-4xl font-black uppercase leading-tight tracking-wide text-white md:mt-0 md:text-5xl lg:text-7xl lg:!leading-snug">
              Asclepius {/* <br className="hidden lg:block" /> */}
              <span className="gradient-text animate-gradient font-black text-transparent">
                2024
              </span>
            </h1>
            <p className="z-10 mt-2 font-lexendDeca text-base font-light uppercase italic text-white md:my-10 md:mt-0 md:text-lg md:tracking-widest lg:my-0 lg:text-xl">
              Pathos To Praxis
            </p>
          </div>

          {/* <br className="block md:hidden" />
        <br className="block md:hidden" /> */}
          <div className="hidden flex-col justify-between md:mb-0 md:ml-20 md:mt-0 md:flex">
            <h1 className="mb-2 text-xl md:text-2xl">Organising Committee</h1>
            {core.map(({ id, img, name, desig, number }) => (
              <div key={id}>
                <ContactCard
                  imageSrc={img}
                  name={name}
                  designation={desig}
                  number={number}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 border-b border-gray-800 md:mt-12" />

        <div className="relative z-50 mt-4 flex flex-col items-center justify-between md:flex-row">
          <p className="pb-2 text-sm font-light hover:text-indigo-400 md:pb-0 md:text-base lg:font-normal">
            7th International UG Medical Conference
          </p>

          <p className="text-sm font-light hover:text-indigo-400 md:text-base lg:font-normal">
            22 - 26th October
          </p>

          <div className="flex items-center gap-6 pt-5 md:gap-3 md:pt-0">
            {/* <svg
              className="cursor-pointer fill-white hover:fill-[#ffc500]"
              width={22}
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 983.786406873756277 897.247612498565104"
            >
              <path
                className="cls-1"
                d="m78.608982260550874,377.356820241721834c12.028967923121854,64.357019876022605,25.96069068849738,128.353895441288842,41.823742728274738,191.875124525176943,15.940343211717845,63.830730069365018,33.810696065838783,127.179486979319336,53.579652900827568,189.93014945005234,11.090085662693127,35.202172173267172,22.7873182595049,70.210881183124002,35.056588279928292,105.019454677587419,3.936097176308976,11.166917641785403,10.213990423272662,20.768685968871068,20.680194846605445,26.893398282201815,9.645613253775991,5.644511025728207,23.861253667047094,8.035899258207792,34.675144212722444,4.536375678246259,10.888636159133966-3.523712287595117,21.393964642596075-10.271413874348582,26.893398282201815-20.680194846603627,5.431678234470382-10.280540280949936,8.543369895422074-23.307087884328212,4.536375678246259-34.675144212722444-21.764831946047707-61.747989173563838-41.701796170547823-124.135571582552075-59.728390247413699-187.077011590963593-18.114426896097939-63.248116028236836-34.316462771166698-127.043950897530522-48.575238093317239-191.271239655285171-7.998957207893-36.030537177632141-15.375386347785934-72.197141249685046-22.156355568299659-108.476477406567938-1.972619808647323-10.553850757964028-11.716128148947064-21.647721104497577-20.680194846605445-26.893398282201815-9.645613253775991-5.644511025729116-23.861253667048004-8.035899258207792-34.675144212722444-4.536375678247168-10.888636159133966,3.523712287596027-21.393964642595165,10.271413874349491-26.893398282200906,20.680194846605445-5.921956686416706,11.208490567495573-6.866708308631132,22.207469149503595-4.536375678247168,34.675144212721534h0Z"
              />
              <path
                className="cls-1"
                d="m83.759418485389688,370.42802854679303c4.748990450882957-6.914412579224518,9.672228287832695-13.700286682429578,14.78691063847873-20.348888108643223l-7.036375678247168,9.107443490112018c17.701371360198209-22.830498399771386,37.692889627452132-43.871095038654857,60.564542791976237-61.585005184073452l-9.107443490112018,7.036375678246259c16.045592274203045-12.281198731626318,33.342667798595357-22.758108468690807,51.942615218110404-30.697771211263898l-10.749579113842628,4.536375678247168c14.908624578431045-6.233436805983729,30.408692659938424-10.827409016516867,46.431019770443527-13.045719976550572l-11.962782549439908,1.607443490112018c14.965368177520759-1.946936438451303,30.058179068233585-1.937943329981863,45.028107603541685-.042162258887402l-11.962782549439908-1.607443490112018c14.848700116022883,2.000253833351962,29.338543493269754,5.833182435132585,43.157992946824379,11.636741466205422l-10.749579113842628-4.536375678246259c11.051553046907429,4.755018655265303,21.476966998685384,10.705651650208893,31.064111613894966,17.98386406404461l-9.107443490112018-7.036375678246259c8.376395545810738,6.492741720816412,15.912442392740559,13.884383175698531,22.454692583602082,22.227049658301439l-7.036375678247168-9.107443490112018c6.200454747440745,8.094208553568933,11.28197962964714,16.850438682863569,15.268366477058407,26.235017342804895l-4.536375678246259-10.749579113843538c4.151061741382364,10.130584341818576,6.899452148752971,20.660342843931176,8.357794102389562,31.507283546532562l-1.607443490112018-11.962782549438998c1.521487457769581,12.383228693173805,1.340383479252523,24.812190042079237-.257373082208687,37.178032014820019l1.607443490112018-11.962782549439908c-2.176549591124967,15.666870032551742-6.551455428501868,30.840793439610025-12.690540828489247,45.40655046412121l4.536375678246259-10.749579113842628c-6.725186661541557,15.604672832382676-15.363498459298171,30.245280751096288-25.727109608657884,43.70916522798143l7.036375678247168-9.107443490111109c-13.404893448324401,17.137519082507424-29.410985981259728,32.053387444271721-46.593428368310015,45.338934996343596l9.107443490112018-7.036375678248078c-36.348221697537156,27.813355861937453-77.653621222098081,47.959790235356195-118.698515072120244,67.769874588089806-13.947025361263513,6.731452391761195-22.287638336717464,23.983697501198549-22.287638336717464,38.856180831640813,0,16.310196163281944,8.754356780257694,30.271771188628918,22.287638336717464,38.856180831640813,45.898095120279322,29.114006732415874,88.984313114816359,62.306648617775863,133.480550592155851,93.457353767615132,47.161108963839979,33.01631515743793,95.956528033426366,62.34690540795782,149.559485039009814,83.723251492145209,43.538841544384923,17.362873187394143,91.789436608019969,25.90571206558343,138.631261538232138,25.092582996103374,48.928491127406232-.849351589540674,98.924163620713443-11.987675504960862,141.312441247395327-37.103527064522495,20.501316686397331-12.147415641795305,39.957127971720183-27.757973946996572,55.212742498582884-46.14717570501125,20.45309561902468-24.654274087215526,35.280571775012504-51.685122012653665,45.283036445734979-82.187638561392305,9.116827584681232-27.801766207459877,13.156825294034206-57.542652765461753,14.642175939965455-86.680450117242799,1.370223715994143-26.879377655832286-.074589541733076-53.905120040230031-3.211729362223195-80.616531040121117-3.674153281352119-31.283852168078738-8.941768221291568-62.284514106948336-17.095155367414918-92.726943450392355-8.128459942106929-30.349358251215563-19.078158151090975-59.607456342391743-31.477852993439228-88.449188533906636-10.581363999825044-24.612288494521636-22.418680914704964-49.615772044839105-37.61769448593077-71.759252264952011-10.86706969313127-15.832260539328672-22.46493342082249-28.585204807549417-37.896961204631225-39.904191353559327-10.188033805890882-7.472654870422048-23.186770055634042-13.789892255201266-35.842241263560936-13.789892255201266-8.675343632326985,0-15.970683018073032,2.814304943353818-23.494852295547389,6.545163801883064-20.7302661253525,10.279101142100444-41.136669174798953,21.290403043702099-61.586172262179389,32.111132405891112-27.901902434001386,14.764120851174084-56.018159523508075,29.408682551857055-82.99038494942215,45.835783679316592-3.775420719306567,2.299373410070075-7.540234030662759,4.637512778909695-11.130802032119391,7.219407620459606-9.758637731189083,7.017211875246176-17.382775199350363,14.919280430621257-20.680194846605445,26.893398282201815-2.966297290888178,10.771693367412809-1.627027166701737,25.115230240617166,4.536375678246259,34.675144212722444,6.194735236389533,9.608512931845326,15.419167164069222,18.066731568881551,26.893398282201815,20.680194846605445,11.718674007095615,2.669139558533971,24.155727248549738,1.822168981001596,34.675144212720625-4.536375678246259,55.425516405663075-33.50239110471648,111.1739275897271-66.460848324413746,166.84590357542038-99.550571519653204,51.256896953544128-30.465534984343321,102.324373338888108-61.244258619026368,152.872074113176495-92.875701325247064,34.66684497917413-21.693614229075138,69.110622540672921-43.741272064701661,103.393453492917615-66.036367761423207,9.779204776103143-6.359693766967212,17.529404421224172-15.451743923601498,20.680194846605445-26.893398282200906,2.966297290888178-10.771693367412809,1.627027166701737-25.115230240617166-4.536375678246259-34.675144212722444-6.194735236389533-9.608512931845326-15.419167164069222-18.066731568881551-26.893398282201815-20.680194846605445-11.492015347097549-2.617513956924086-24.49080885607691-2.086785976640385-34.675144212720625,4.536375678247168-56.994560170904151,37.065176296930076-114.471929904762874,73.376900864052914-172.567063082407913,108.693634132982879-50.186781612464983,30.509150816707916-100.78746467120618,60.328294790488144-151.278528425271361,90.329034345604668-33.156041411604747,19.70062995529679-66.259665624405898,39.48912956307413-99.265839673835217,59.439972127734109,15.141574442186538,25.904120554428118,30.283148884376715,51.808241108855327,45.424723326563253,77.712361663283446,19.805455618808992-14.241647470814314,42.365966230083359-25.27288652689731,63.771211533727183-36.839384690483712,25.194381587471071-13.613988731750396,50.553498279539781-26.924211632386687,75.981705310852703-40.095614896905317,5.573950560348749-2.887216960142723,11.150124784820946-5.770383110028888,16.736933031406807-8.632668751803067h-45.424723326563253c5.153509674411907,2.271918838728197,9.870747954610124,5.138380631498876,14.331974179822282,8.571007650851243l-9.107443490112928-7.036375678247168c6.024444840770229,4.840700539044519,11.223145188132548,10.430281765584368,15.968146767923827,16.516660587843035l-7.036375678246259-9.107443490112018c8.917770611215019,11.732423569587809,16.066362115929223,24.716894084169326,22.925607549987035,37.725795671593914,7.512521059439678,14.247871442310498,14.386672331151203,28.817597788442981,20.678000184430857,43.644234906424572-1.512125226083299-3.58319303794724-3.024250452164779-7.166386075895389-4.536375678246259-10.749579113842628,19.677712275188242,46.783722795958056,33.114148588379976,95.998265443530727,39.912249015233101,146.295316853725126l-1.607443490111109-11.962782549438998c5.135690529512431,38.925556054646222,6.91734948305384,78.639255776653954,1.745517872235723,117.657830419431775l1.607443490111109-11.962782549438998c-3.000673508762702,21.738987228582118-8.253410938459638,43.090390899460544-16.742804829293163,63.36067478338191,1.512125226083299-3.583193037948149,3.024250452164779-7.166386075894479,4.536375678246259-10.749579113842628-6.306831631680325,14.72762648025855-14.246438283582393,28.616350212594625-24.038086694885351,41.31016430785894l7.036375678246259-9.107443490112928c-9.046170861191058,11.537814791183337-19.447826734103728,21.844504726421292-31.02931560916295,30.831680844121365l9.107443490112928-7.036375678246259c-13.26922964808,10.141179735341211-27.793226840798525,18.377869659634598-43.169347012330036,24.872803528713121,3.583193037948149-1.512125226083299,7.166386075896298-3.024250452164779,10.749579113842628-4.536375678246259-19.508022845508094,8.096452990756006-40.020715207818284,13.296248446698883-60.931475657884221,16.137582619057866l11.962782549438998-1.607443490111109c-26.648892939620055,3.484567761846847-53.628306021615572,3.150567648734068-80.259855666012299-.322849989661336l11.962782549438998,1.607443490112928c-30.118667373440985-4.057926110173867-59.296625315131678-12.235588078820001-87.307638100250188-23.978365601475161l10.749579113842628,4.536375678246259c-75.496254641648193-31.985418423761075-140.284699237863606-83.05944725108202-206.601062695614928-130.243180657327684-18.951242857517173-13.483706646184146-38.106572058245547-26.68399643441262-57.749606264792419-39.143934665744382v77.712361663281627c54.375494896672535-26.244023058281527,109.008562154342144-53.922715090327983,152.862520395714455-96.351802583239987,21.714793776004626-21.009252572861442,40.738951990146234-46.092530989755687,53.068962501147325-73.783955886843614,13.430736312689987-30.163496258469422,22.465112801351097-62.190003681214876,21.333509016504649-95.5602345041234-1.064987583205948-31.405764058988098-9.830188114138764-64.103221076650698-28.397773695321121-89.832493304759737-17.352516905024459-24.045540511455329-39.527846091639731-44.297562921878125-66.531200783095301-57.064326220441217-28.01943678088719-13.247151001348357-57.358716759642448-20.664368687165734-88.44150244377397-21.629951057993821-27.713206667917802-.860906872041596-56.288509060831529,4.095923793042857-82.064271618188286,14.309013709245846-15.406070264092705,6.104323024872429-30.454227634525523,12.882246634292642-44.5982773129017,21.543399796814811-14.320968454853755,8.76948992994221-27.787878066862504,19.059479001777618-40.640167164056038,29.836079624697049-23.401209069836113,19.621834082001442-42.99231276322098,42.796013072475944-61.333179975991698,67.104469013720518-4.101487415980955,5.435993019757916-8.061202735018014,10.975295887391439-11.916348201496476,16.588292288173761-6.328206588658759,9.213712196959932-7.414186007195894,24.224778860522747-4.536375678246259,34.675144212722444,2.874448546494932,10.438157509820485,10.945297030294569,21.750007843701496,20.680194846605445,26.893398282201815,10.443602324209678,5.51783134773541,23.095362392143215,8.283752199283299,34.675144212722444,4.536375678246259,11.61491705899698-3.758746767000957,19.964801066231303-10.592328753388756,26.893398282201815-20.680194846605445h0Z"
              />
            </svg> */}

            {socialMedia.map((profile) => (
              <div
                key={profile.id}
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-lg border border-black-300 bg-black-200 bg-opacity-75 saturate-150 backdrop-blur-lg backdrop-filter"
              >
                <Link
                  href={profile.link}
                  target="_blank"
                  className="transition ease-in-out hover:scale-110"
                >
                  <Image
                    src={profile.img}
                    alt={profile.alt}
                    width={profile.width}
                    height={profile.height}
                  />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
