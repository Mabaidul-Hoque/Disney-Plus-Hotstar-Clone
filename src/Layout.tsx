// import React from "react";

import { Outlet, useLocation } from "react-router-dom";
import { Home } from "./pages";
import { Navbar } from "./components/home-page";

const Layout = () => {
  const { pathname } = useLocation();
  return (
    <div>
      {/* NAVBAR */}
      <nav>
        <Navbar />
      </nav>
      {/* MAIN CONTENT */}
      <main>
        {pathname === "/" || pathname === "/home" ? <Home /> : <Outlet />}
      </main>
      {/* FOOTER */}
      <footer>
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
          minima, deleniti quam labore optio nobis! Est architecto, adipisci
          debitis quae harum dicta nihil aspernatur nesciunt vitae itaque. Omnis
          accusamus consectetur assumenda, alias suscipit ipsum doloremque
          commodi unde soluta obcaecati quasi sequi, eius libero laborum ipsam
          et odio qui tenetur. Ut, quaerat. Fugit adipisci harum saepe amet
          quam. Nihil asperiores soluta sunt totam molestias quidem, cumque
          cupiditate est, dicta, nisi omnis? Ea, cupiditate corporis, deserunt
          eligendi accusantium enim animi dolorum nostrum temporibus commodi
          asperiores culpa vero voluptatem illo sint soluta autem inventore
          neque maiores illum, incidunt iste? Ab est omnis odio impedit atque.
          Id velit laborum voluptates nostrum exercitationem veniam cupiditate
          aut atque maxime libero at maiores iusto provident, hic, illo, sequi
          delectus? Error earum, ullam possimus mollitia soluta a unde
          praesentium libero quam molestiae, voluptatum voluptate officia odio
          autem veritatis, omnis eaque at. Natus necessitatibus autem hic
          repellat laborum excepturi minima placeat exercitationem voluptas ea
          accusantium aut laboriosam tempora earum labore mollitia odio ad rerum
          unde deserunt, nam ullam ab expedita. Quae repellat, alias nostrum,
          delectus beatae earum, minima fuga dolor culpa labore reiciendis eaque
          impedit recusandae doloremque? Voluptatibus repellendus maxime ut
          harum molestias autem laborum debitis consequuntur dignissimos
          dolorum, eos facere voluptate quaerat reiciendis a tempora ullam
          sequi. Consectetur officiis incidunt cum dignissimos enim molestiae
          recusandae quidem saepe veniam, architecto quas culpa officia dolorem
          quod ullam earum nam? Quae minima molestias facere doloribus itaque
          quidem? Repellat ipsa nesciunt ullam ipsam ratione modi sequi adipisci
          saepe dolor architecto deserunt, tempore deleniti dicta veniam
          quisquam cum perferendis nobis sapiente totam inventore aliquid! Dolor
          harum temporibus aliquid, doloribus esse natus inventore quos
          molestiae distinctio et nihil. In itaque sapiente illo! Aperiam,
          dolor. Quis reprehenderit, nihil ratione asperiores explicabo, dolore
          pariatur sint nulla doloremque dolorem tenetur rerum autem placeat!
          Nobis cumque, voluptate reiciendis quibusdam debitis voluptates soluta
          doloremque eaque. Saepe quae, fugiat iure, aliquid asperiores suscipit
          veniam commodi quod temporibus repudiandae officiis excepturi ea
          facere? Blanditiis doloribus voluptatibus aut? Cum quod nulla animi
          fugiat adipisci perferendis, autem hic? Ipsa debitis consectetur cum
          quam nisi non, vitae unde nam iusto corporis dolorem ratione? Ad
          veniam iure, quae incidunt repellat nisi, rem libero nemo nobis
          voluptatum iusto officia voluptate doloribus praesentium velit impedit
          natus maiores eligendi illum vero dolorum explicabo numquam! Dolorem,
          quas corrupti? Dolores facere expedita unde officiis earum vel sunt
          praesentium reprehenderit nobis, sint ut rerum commodi atque quidem,
          minima omnis, quisquam dicta est. Harum quas ratione quam, id
          temporibus illo facere dolores consequuntur assumenda aspernatur
          excepturi, repudiandae laudantium labore officiis error porro fuga a
          corrupti sed ducimus hic quod. Sapiente exercitationem eaque, maiores
          recusandae adipisci accusamus necessitatibus molestias suscipit amet
          expedita deleniti asperiores fuga! Excepturi rem perferendis
          consequuntur eaque, optio maiores vitae dolores magni, voluptas aut
          consectetur distinctio a. Quas assumenda animi quidem voluptates,
          officia nesciunt dolore nam similique incidunt officiis ipsum commodi
          minus deleniti aliquid ea. Animi voluptates temporibus nemo libero
          nobis odit fugiat placeat distinctio ut rerum nesciunt vitae
          consequuntur quidem, eius mollitia saepe voluptas sapiente asperiores
          sit, architecto quos aperiam molestias cum reiciendis. Exercitationem
          saepe provident nesciunt praesentium quibusdam ea veniam, pariatur
          nihil reprehenderit mollitia culpa deserunt sequi tenetur asperiores
          cupiditate. Impedit harum omnis voluptatem praesentium similique,
          sapiente soluta deleniti, sint dolor sequi eaque tempora incidunt
          facilis! Est fugit nobis excepturi eligendi illo officia inventore
          repellendus dolorum adipisci fugiat facilis doloremque ullam dolores
          ab accusamus, sapiente debitis cumque incidunt porro iste. Eligendi,
          neque! Nisi, aliquam. Corporis nemo iste recusandae facilis temporibus
          numquam vel, suscipit atque facere? Tempore, aliquid hic. Ab unde
          facere repudiandae? Odio exercitationem optio laborum, corrupti
          placeat debitis voluptate doloribus harum repellendus ipsam nihil
          minus modi expedita? Magnam architecto, velit dolorem eum labore, in
          cupiditate voluptatum vel ipsa vero aut nesciunt accusamus recusandae?
          Porro recusandae tenetur consequatur totam laboriosam, hic minima rem
          amet non veritatis neque doloremque. Quisquam molestias quia
          cupiditate accusantium suscipit, dignissimos ab maxime facere ex qui
          sunt recusandae, voluptatem minima id possimus animi at optio. Impedit
          at, cum soluta error iusto hic recusandae molestias quam iste ducimus
          unde veritatis quisquam fuga sit accusamus nihil. Maiores animi quo
          officia veritatis voluptate laudantium corporis sequi atque fuga,
          exercitationem doloremque illo nihil ipsum voluptates praesentium, eum
          autem accusamus commodi tempora ipsam laborum possimus iste. Dicta ea
          veniam voluptates odio natus suscipit id fugiat quidem corrupti
          accusantium neque quas, praesentium perferendis ipsum ullam
          consequuntur vel quaerat nesciunt eaque recusandae! In autem
          laudantium aliquid debitis laboriosam aut fugit sed doloribus facere
          eveniet! Perspiciatis tenetur cupiditate quos magnam fugiat delectus
          consectetur iste quasi a possimus blanditiis, minima ab quaerat
          obcaecati explicabo quisquam officia laudantium consequatur sit
          architecto dolore fuga voluptate unde necessitatibus! Placeat
          similique natus assumenda alias ab tenetur voluptate tempora maxime
          quo, nostrum dolore necessitatibus reprehenderit laborum earum
          explicabo quam et quibusdam quae quisquam voluptatem quia, minima
          laudantium libero? Incidunt, voluptates! Dolorum voluptatum aut a.
          Numquam qui accusantium velit iure architecto odit optio ex temporibus
          itaque quisquam. Saepe, sapiente omnis voluptate quod, culpa dolorum
          quia, dolorem veniam accusamus asperiores porro magni pariatur
          explicabo veritatis sint quo consectetur quam voluptates repudiandae
          itaque labore soluta similique. Unde optio quaerat tempora maxime,
          similique corporis expedita ut cum laudantium aliquam, impedit
          voluptatem beatae. Placeat consequuntur quos qui culpa possimus magni
          natus officia dolores ad ratione adipisci iusto veniam optio id quis,
          facere beatae, eaque, quia aliquid quo. Odio dolorum sequi, et, ullam,
          sapiente rem cupiditate odit assumenda sint exercitationem quo
          repudiandae! Recusandae fugit labore dolore repellendus animi eos,
          distinctio quo ab atque, maiores at temporibus consequuntur aut
          ducimus reprehenderit id illo quam accusamus accusantium nisi
          blanditiis minus nihil eveniet. Voluptas, corrupti dicta! Quidem
          deserunt expedita quae possimus impedit distinctio beatae delectus
          temporibus unde dicta quod, doloribus blanditiis nesciunt voluptates
          illum repellendus at? Doloribus accusantium iste id libero fugiat
          iusto voluptatum vel, sequi qui ipsa sed sit, repellat cumque sunt
          illo laudantium ullam tempore temporibus consequuntur perferendis
          blanditiis, reprehenderit labore similique. Sunt illum repudiandae
          ratione sit ducimus neque consequuntur dolor adipisci porro quibusdam.
          Commodi officiis recusandae aspernatur saepe eos perferendis
          temporibus consequuntur suscipit nesciunt accusamus, iusto quam
          quibusdam odit porro deleniti voluptatum possimus sed, maiores iure
          praesentium modi magni optio. Laboriosam sunt culpa eaque magni
          laudantium maiores ipsam quaerat! Repellat odit voluptatem ipsum,
          consequuntur esse officia, incidunt pariatur itaque totam harum et
          quia, omnis officiis? Eaque officiis praesentium laudantium et rem at
          debitis dignissimos non ipsam esse? Error itaque facilis iusto
          eligendi natus, exercitationem velit repellendus nesciunt voluptatum
          sed consequatur. Facere repellendus asperiores a debitis perspiciatis
          magni provident sunt. Quam recusandae, delectus a sequi tempore
          accusamus minus unde voluptate vitae soluta? Recusandae dignissimos
          deleniti tempore voluptates, necessitatibus magni voluptatem
          accusantium pariatur assumenda excepturi quasi ullam, autem veritatis
          minus sit sapiente quas incidunt expedita quis quae a commodi. Nostrum
          beatae similique sunt cum quasi, est pariatur culpa facilis corporis
          recusandae dolor eveniet temporibus aut aliquid consequatur suscipit
          veritatis vel iste numquam expedita rerum ut sit? Quas possimus in
          sunt quis at, repellat omnis laboriosam. Minima facere veritatis ipsam
          unde soluta magni harum debitis illo pariatur voluptatum perferendis
          voluptate cumque sequi asperiores aut, laborum quibusdam labore eius a
          odit. Corrupti eos exercitationem corporis quibusdam est. Cum
          aspernatur natus amet! Sequi porro amet neque rerum blanditiis, ullam
          in cum laudantium pariatur enim velit, saepe repudiandae facere ipsum
          perferendis corrupti commodi, ipsa error dolorum odio accusantium
          totam modi alias? Magni voluptates, excepturi sunt minima dolores
          possimus autem odio dolorem vitae quo ipsam? Ex vero deserunt ad harum
          aliquid provident autem nulla dignissimos non numquam, quisquam nam id
          iure quibusdam, aperiam doloremque sed molestias quam neque beatae
          consequuntur ab. Aut et alias dicta perferendis repellat enim
          similique illum repudiandae optio ipsa aliquam est cupiditate corrupti
          corporis veniam eligendi, dolorum mollitia architecto sapiente tempora
          eaque excepturi? Quis soluta dignissimos, dolore vel vero optio
          dolorum porro fugiat minima sapiente nam consectetur distinctio iure
          magnam ad sed fuga! Dignissimos alias odit natus minus? Dignissimos,
          nostrum ipsum sit itaque quam inventore deserunt iure natus modi
          dolorem doloremque sint assumenda commodi autem obcaecati voluptate
          totam delectus possimus illo nesciunt cum! Doloribus dolor, quod nihil
          nostrum dignissimos quia voluptates recusandae saepe consequuntur,
          maiores unde minus eum cumque, esse perferendis! Esse a enim nesciunt
          dolorum sapiente beatae obcaecati illum distinctio velit omnis, ad
          molestiae aliquam iure odit in quae quaerat eum accusamus tenetur
          consequatur asperiores magnam, minima explicabo iusto. Dolor, dolore
          expedita vero voluptates magnam, soluta perferendis est eveniet magni
          odit tenetur ea. Assumenda officia obcaecati nobis atque modi
          consequatur numquam enim necessitatibus excepturi quis deleniti
          molestias voluptas, hic nisi quo expedita iure perferendis quisquam.
          Nulla delectus dolorem nesciunt repudiandae nostrum natus vel labore
          fuga suscipit! Repellendus nesciunt harum aliquam modi corrupti
          deleniti placeat. Repellat debitis laborum eveniet saepe magni porro
          eaque suscipit dolorem quaerat facilis. Distinctio eveniet architecto,
          velit saepe ullam animi eum quod aut nobis dicta pariatur. Sapiente
          illum, fuga libero nobis labore ea debitis asperiores voluptas iste at
          tempore, necessitatibus vel, aliquam natus quisquam voluptate corporis
          beatae accusantium voluptates excepturi impedit culpa ad omnis! A,
          libero optio magnam officia necessitatibus ipsam fuga consequatur
          dicta reiciendis vero beatae facilis porro! Repellat magni quia beatae
          doloribus perferendis aliquam autem in cumque alias earum neque ex qui
          odit ducimus expedita, nihil esse, perspiciatis, accusantium
          aspernatur magnam. Provident voluptatibus doloremque eum sapiente
          magnam neque tempore commodi officiis voluptas voluptates dicta fuga
          ad, tempora, porro eveniet saepe quos, nemo nam quasi. Magnam nihil
          consequatur, nostrum assumenda, necessitatibus amet consequuntur
          minima suscipit inventore laudantium quam aliquam unde expedita
          tenetur neque commodi doloribus iusto error officia exercitationem
          possimus voluptate natus. Iure commodi aperiam repellendus nulla
          explicabo error soluta a placeat, doloremque nobis? Veritatis,
          laudantium adipisci vel dicta ratione, commodi neque illo
          exercitationem autem, natus perspiciatis sapiente ut officia nisi
          beatae repellendus eius aspernatur ad inventore omnis quidem? Dolore
          iusto corrupti eum at obcaecati quibusdam mollitia dolorem
          reprehenderit nisi? Nobis vitae atque saepe nesciunt id cumque,
          expedita quidem quia temporibus possimus, provident deserunt magnam
          illum omnis et dolores consequuntur eius, ab nisi doloremque tempore
          quibusdam! Maiores eius, recusandae dolore aspernatur nesciunt
          perspiciatis blanditiis corporis nulla aperiam dicta dolores iusto
          commodi, ea qui eum explicabo asperiores earum vero inventore dolor
          ipsam sapiente. Ipsam commodi nesciunt quod laudantium est ab,
          voluptas dolore perspiciatis recusandae earum assumenda illo fugit id
          consectetur tempora doloremque accusantium molestiae eligendi ea quae!
          Dignissimos exercitationem fugiat nobis ipsum velit perferendis minus
          saepe, quia possimus, laudantium fugit ipsa assumenda. Explicabo,
          praesentium vitae nesciunt nulla eligendi ipsum hic fugit omnis. Eaque
          illo quibusdam magnam libero natus quis repellendus debitis rem
          tempore aperiam ea expedita nobis obcaecati, eligendi nulla.
          Similique, dolore saepe iusto repellendus nobis quaerat ducimus quae.
          Modi, est saepe? Quaerat quos, labore dignissimos deserunt officia aut
          modi. Accusamus aut ad voluptates asperiores voluptate quae enim
          dolorum quia ullam, sunt praesentium porro officiis modi quasi
          repudiandae neque fugit tempore architecto repellat doloribus adipisci
          minus animi! Necessitatibus et nobis, temporibus, perspiciatis vero
          recusandae a quos facere iste animi voluptatem sint aut quis debitis
          dignissimos quod, aperiam obcaecati vitae dolore officia magni
          similique ducimus. Quibusdam similique quos reprehenderit distinctio
          quis culpa necessitatibus? Quae voluptatum soluta officia? Eligendi
          quod eaque saepe libero asperiores, cum natus mollitia velit veritatis
          quae nulla quo dicta voluptas dolores, aut corrupti nam rerum ratione
          sapiente animi! Eveniet molestiae magni delectus ullam molestias
          voluptas aut inventore tempore sequi libero necessitatibus at et
          nostrum, ut vero, nemo nulla excepturi! Quod ducimus hic
          exercitationem earum, totam nostrum officia nesciunt! Labore eveniet
          recusandae adipisci, eligendi itaque consectetur soluta aspernatur
          nemo a molestias dignissimos, corporis maiores? Temporibus aspernatur
          ipsam fugiat quasi incidunt modi molestias tenetur sint voluptatum?
          Ullam rem distinctio sit doloribus laborum illo impedit maxime
          tempora, repellendus magni amet iste quaerat ratione quae voluptatibus
          quis hic commodi similique eius! Qui perspiciatis nulla beatae
          tenetur, sed labore. Labore eveniet, obcaecati architecto, sunt itaque
          consectetur alias ratione repudiandae earum amet, illum velit commodi
          similique odio quod totam. Adipisci, quia incidunt ipsum maxime
          debitis et vero possimus illo asperiores id suscipit similique
          deserunt error aspernatur dolorem voluptatibus officia omnis amet iure
          quod? Accusamus, nostrum. Dolore maiores qui harum sint molestiae,
          unde temporibus veniam architecto eum, nemo commodi aliquam totam
          voluptatibus, est voluptatum voluptas tenetur modi. Aliquam dolorum
          dolor laboriosam perspiciatis voluptatibus velit doloremque nam eum
          debitis.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
