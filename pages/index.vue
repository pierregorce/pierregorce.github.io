<template>

  <v-container id="main-container">
    <v-layout wrap>

      <v-flex xs12 sm5 class="pa-2">
        <v-card>
          <v-card-text>

            <v-layout wrap>
              <v-flex xs4>
                <div style="height:118px; overflow:hidden">
                  <img style="max-width: 158px; margin-top: -33px; margin-left: -27px;" src="profil.jpg" alt="photo-profil-gorce-pierre">
                </div>
              </v-flex>
              <v-flex xs7 pl-2>
                <h2>Pierre GORCE</h2>
                <div>
                  <v-icon>mail</v-icon>
                  gorce.pierre@gmail.com
                </div>

              </v-flex>
            </v-layout>

          </v-card-text>
        </v-card>
        <v-card>
          <v-layout>
            <v-flex v-ripple xs3 class="green profil-block">
              <div>
                <v-icon>room</v-icon>
              </div>
              <h4>Grenoble (38)</h4>
              <h4>Montpellier (34)</h4>
            </v-flex>
            <v-flex v-ripple xs3 class="grey profil-block">
              <div>
                <v-icon>favorite</v-icon>
              </div>
              <h4>Passionné</h4>
            </v-flex>
            <v-flex v-ripple xs3 class="blue profil-block">
              <div>
                <v-icon>search</v-icon>
              </div>
              <h4>Curieux</h4>
            </v-flex>
            <v-flex v-ripple xs3 class="violet profil-block">
              <div>
                <v-icon>rowing</v-icon>
              </div>
              <h4>Autonome</h4>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>

      <v-flex xs12 sm7 class="pa-2">
        <v-card>
          <v-card-text>
            <h1>Concepteur Développeur Web - Full Stack</h1>
            <div style="font-size:16px;">
              <v-icon>format_quote</v-icon>
              Passionné par le web, le code, l'architecture web, le design et les nouveautés associées ; je travaille actuellement
              sur la réalisation d'applications web de gestion et de sites e-commerce. Mes préférences se tournent vers la
              conception, l'architecture & la mise en place de bonnes pratiques de développement.
              <v-icon style="position: absolute;">format_quote</v-icon>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex xs12 sm7>
        <div class="pa-2">

          <v-card>
            <v-card-text>

              <h2>
                <v-icon>work</v-icon>
                Expériences
              </h2>

              <v-layout wrap>

                <v-flex xs3>

                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2018</h3>
                    <div class="timeline-point"></div>
                  </div>

                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>
                      <h3>Concepteur Développeur, Enovalp - Agence Web- Grenoble (38)</h3>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Architecture & Réalisation d'une plateforme/produit ecommerce générique (essentiellement pour libraire) ; front-office + backoffice, clients multiples & cloud (exemple : <a href="https://www.icigrandsboulevards.fr/">https://www.icigrandsboulevards.fr/</a>)
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Catalogue produit, dialogue avec la gestion du magasin, Cms complet, Marketing, Promotions, Emailing, Paiements, Commandes, Gestion d'utilisateur
                        & permissions...
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Référent technique & aide aux autres développeurs
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        ASP.NET CORE, EF CORE, REST, Swagger, Autofac, Hangfire, Cache, JWT, Azure DevOps (VSTS), Azure, AWS, VueJS, Nuxt, Vuetify, Webpack, Npm, NodeJS, Trello
                      </div>

                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>

                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>

                </v-flex>

                <v-flex xs3>

                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2016 - 2017</h3>
                    <div class="timeline-point"></div>
                  </div>

                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>
                      <h3>Concepteur Développeur, Enovalp - Agence Web- Grenoble (38)</h3>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Refonte & Conception de la gestion article - migration de la base de donnée pour le diffuseur Sofédis (<a href="http://www.sofedis.fr/">http://www.sofedis.fr/</a>).
                      </div>

                      <div class="pa-1">
                        <v-icon>chevron_right</v-icon>
                        Applicatif de gestion de base article, éditeurs, parutions...
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        2 nouveaux sites : Editeur & Adinistrateur, architecture, conception, développement.
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Nombreux export & import : Pdf, Excel, Ftp & Api Rest
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Définition des spécifications, suivi de projet, suivi du développement, coding
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        ASP.NET CORE, Entity & Identity Framework, C#, SQL Server, Git, VueJS, Trello
                      </div>

                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>

                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>

                </v-flex>

                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2015 - 2016</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3 ">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>

                      <h3>Concepteur Développeur, Enovalp - Agence Web- Grenoble (38)</h3>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Projet : Refonte complète et migration des 4 sites de la librairie Molat (<a href="https://www.mollat.com">https://www.mollat.com</a>)
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        CMS, Site e-commerce, Site Pro, Site culturel, Blogs. Plateforme big data (analyse & profiling utilisateur)
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Conception des modèles de données SQL, Architecture du CMS, Creation & Utilisation d'API de dialogue avec le système de gestion
                        interne
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Refonte des schémas SQL & ré-écriture de l'ensemble du système e-commerce
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Réalisation des pages clients, workflow de commande & paiement, SSO (3 domaines)
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        ecommerce sous forme d'un CMS complet, newsletter, permissions...
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Plateforme MongoDB : tracking, analyse & profiling utilisateur
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        ASP.NET MVC5, Entity & Identity Framework, C# & VB.NET, Html, Css, Responsive, MySql, SOAP & REST, Js, Git, Azure, MongoDB
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>

                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>

                </v-flex>

                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2015</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>

                      <h3>Projet Personnel - Application Android</h3>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Développement d'un jeu vidéo Android grand public. Utilisation de la librairie multiplateforme LibGDX en Java.
                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Conception, Architecture, Code (Java) & Algorithms (Path finding, Finite State Machine for IA, Collision, Pooling for mobile optimization, Particle, Physics, Steering behaviour, Vector...), Integration (Play Store IAP, Admob), Graphism (Pixel Art) & Level Design.
                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Publication sur le Play Store Android : <a href="https://play.google.com/store/apps/details?id=com.oasix.crazyshooter.android">https://play.google.com/store/apps/details?id=com.oasix.crazyshooter.android</a>
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>

                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>

                </v-flex>

                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2011 - 2014</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3 ">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>

                      <h3>Chargé d’étude (3 ans), OASIIS - Bureau d'étude HQE- Aubagne (13)</h3>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Mise en place de documents charte graphique avec automatisation / automatisation de certaines procédures

                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Réalisation de Simulation Thermique Dynamique (STD) de calcul de besoin, consommations et estimation du confort estival

                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Réglementation Thermique (2005, 2012 et Existant) et études de faisabilité en énergies (pièces nécessaires aux dépôts des
                        permis de construire).

                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Calcul d'éclairage naturel (FLJ), d'ensoleillement, d'ombre

                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Dimensionnement précis de protections solaires

                      </div>
                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Etudes et dimensionnement des énergies renouvelables (panneaux solaire, thermiques, géothermie...)

                      </div>

                      <div class="pa-0">
                        <v-icon>chevron_right</v-icon>
                        Réalisation/Mise à jour d’outils Excel thermiques, administratifs, de gestion de projet et de management

                      </div>

                    </v-card-text>
                  </v-card>
                </v-flex>

              </v-layout>

            </v-card-text>
          </v-card>
        </div>
        <div class="pa-2">

          <v-card>
            <v-card-text>
              <h2>
                <v-icon>account_balance</v-icon>
                Formation
              </h2>
            </v-card-text>

            <v-card-text>

              <v-layout wrap>
                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2014 - 2015</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>
                      <h3>BAC+4</h3>
                      <div class="pa-0">
                        Concepteur-développeur informatique Option J2EE - AFPA - Pont de Claix (38)
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>

              <v-layout wrap>
                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2010 - 2011</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>
                      <h3>BAC+3</h3>
                      <div class="pa-0">
                        Licence Professionnelle Chargé d’Affaires en Génie Climatique - Mention AB - Université Blaise Pascal - Montluçon (03)
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>

              <v-layout wrap>
                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2008 - 2010</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>
                      <h3>BAC+2</h3>
                      <div class="pa-0">
                        DUT Génie Thermique et Energie - Université Joseph Fourier - Grenoble (38)
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>

              <v-layout wrap>
                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2007 - 2008</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>
                      <h3>Classe Préparatoire
                      </h3>
                      <div class="pa-0">
                        Classe préparatoire école d'ingénieur (E.S.I.S.A.R) - Valence (26)
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>

              <v-layout wrap>
                <v-flex xs3>
                  <div class="timeline">
                    <h3 class="pt-4 pr-3">2006 - 2007</h3>
                    <div class="timeline-point"></div>
                  </div>
                </v-flex>
                <v-flex xs9>
                  <v-card flat color="grey lighten-3">
                    <div class="grey lighten-3 triangle"></div>
                    <v-card-text>
                      <h3>BAC</h3>
                      <div class="pa-0">
                        Baccalauréat Général Série S - Mention AB - Privas (07)
                      </div>
                    </v-card-text>
                  </v-card>
                </v-flex>

                <v-flex xs12>
                  <v-layout>
                    <v-flex xs3>
                      <div class="timeline">
                        <div class="pt-3"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                    </v-flex>
                  </v-layout>
                </v-flex>

              </v-layout>

            </v-card-text>

          </v-card>
        </div>

      </v-flex>

      <v-flex xs12 sm5>
        <div class="pa-2">

          <v-card>
            <v-card-text>
              <h2>
                <v-icon>settings</v-icon>
                Compétences
              </h2>
            </v-card-text>

            <v-card-text>
              <h3>
                <v-icon>build</v-icon>
                Back-End
              </h3>

              <v-layout align-center>
                <v-flex xs7 d-flex align-center>
                  C#, ASP.NET CORE (+MVC), Linq, Tests unitaires & fonctionnels (MsTest), Architecture (Layered)
                </v-flex>
                <v-flex xs5 pl-2>

                  <!-- <div class="progress-value">45</div> -->
                  <v-progress-linear value="90" height="20" color="green"></v-progress-linear>

                </v-flex>
              </v-layout>

              <v-layout align-center mt-3>
                <v-flex xs7>
                  ORM (EF6 - EF CORE), Injection de dépendance (Autofac), Mapping (Automapper), API REST (Swagger), SOAP, Auth (JWT, Identity Framework), Message Broker (Hangfire), Cache (SQL)
                </v-flex>
                <v-flex xs5 pl-2>
                  <v-progress-linear value="85" height="20" color="green"></v-progress-linear>
                </v-flex>
              </v-layout>

            </v-card-text>

            <v-card-text>
              <h3>
                <v-icon>gradient</v-icon>
                Front-End
              </h3>
              <v-layout align-center>
                <v-flex xs7>
                  Javascript (Npm, Webpack, NodeJS, VueJS, Vuex, VueRouter), SSR (NuxtJS)
                </v-flex>
                <v-flex xs5 pl-2>
                  <v-progress-linear value="90" height="20" color="green"></v-progress-linear>
                </v-flex>
              </v-layout>

              <v-layout align-center mt-1>
                <v-flex xs7>
                  CSS (SASS), HTML, Responsive, UI (Bootstrap, Vuetify), JQuery
                </v-flex>
                <v-flex xs5 pl-2>
                  <v-progress-linear value="90" height="20" color="green"></v-progress-linear>

                </v-flex>
              </v-layout>
            </v-card-text>

            <v-card-text>
              <h3>
                <v-icon>dns</v-icon>
                Ops
              </h3>
              <v-layout align-center>
                <v-flex xs7>
                  Intégration continue (Azure DevOps - VSTS), Déploiement continu (Azure DevOps - VSTS), Cloud Azure, Cloud AWS
                </v-flex>
                <v-flex xs5 pl-2>
                  <v-progress-linear value="70" height="20" color="green"></v-progress-linear>
                </v-flex>
              </v-layout>

            </v-card-text>

            <v-card-text>
              <h3>
                <v-icon>fas fa-database</v-icon>
                Data
              </h3>

              <v-layout align-center>
                <v-flex xs7>
                  Relationnel (MySQL, SQL Server, PostGreSQL)
                </v-flex>
                <v-flex xs5 pl-2>
                  <v-progress-linear value="90" height="20" color="green"></v-progress-linear>
                </v-flex>
              </v-layout>

              <v-layout align-center>
                <v-flex xs7>
                  Document (MongoDB)
                </v-flex>
                <v-flex xs5 pl-2>
                  <v-progress-linear value="65" height="20" color="green"></v-progress-linear>
                </v-flex>
              </v-layout>

              <v-layout align-center>
                <v-flex xs7>
                  Conception - Optimisation (Index, Normalisation)
                </v-flex>
                <v-flex xs5 pl-2>
                  <v-progress-linear value="80" height="20" color="green"></v-progress-linear>

                </v-flex>
              </v-layout>

            </v-card-text>

            <v-card-text>
              <h3>
                <v-icon>extension</v-icon>
                Autres
              </h3>

              <div>

                <v-chip disabled label class="grey darken-3 white--text">Architecture Web & Cloud</v-chip>
                <v-chip disabled label class="grey darken-3 white--text">Trello</v-chip>
                <v-chip disabled label class="grey darken-3 white--text">Git</v-chip>
                <v-chip disabled label class="grey darken-3 white--text">Photoshop</v-chip>
                <v-chip disabled label class="grey darken-3 white--text">Illustator</v-chip>
                <v-chip disabled label class="grey darken-3 white--text">VBA (Excel)</v-chip>
                <v-chip disabled label class="grey darken-3 white--text">VB.NET</v-chip>

              </div>

            </v-card-text>
          </v-card>
        </div>

        <div class="pa-2">

          <v-card>
            <v-card-text>
              <h2>
                <v-icon>terrain</v-icon>
                Loisirs
              </h2>
            </v-card-text>
            <v-card-text>
              <div class="text-xs-center">
                <div class="tags">

                  <div class="tag" style="bottom:140px; left:10px">
                    <v-avatar v-ripple color="transparent" size="100" style="background-color: rgba(101, 193, 120, 0.9)  !important; cursor: pointer;">
                      <div>
                        <div>
                          <v-icon>directions_run</v-icon>
                        </div>
                        <h3>SQUASH</h3>
                      </div>
                    </v-avatar>
                  </div>

                  <div class="tag" style="bottom:150px; left:100px">
                    <v-avatar v-ripple color="transparent" size="120" style="background-color: rgba(0, 191, 221, 0.9) !important; cursor: pointer;">
                      <div>
                        <div>
                          <v-icon>far fa-paper-plane</v-icon>
                        </div>
                        <h3>KITESURF</h3>
                      </div>
                    </v-avatar>
                  </div>

                  <div class="tag" style="bottom:105px; left:80px">
                    <v-avatar v-ripple color="transparent" size="70" style="background-color: rgba(197, 214, 54, 0.8) !important; cursor: pointer;">
                      <div>
                        <div>
                          <v-icon>restaurant_menu</v-icon>
                        </div>
                        <h3>CUISINE</h3>
                      </div>
                    </v-avatar>
                  </div>

                  <div class="tag" style="bottom:80px; left:150px">
                    <v-avatar v-ripple color="transparent" size="100" style="background-color: rgba(1, 0, 0, 0.4) !important; cursor: pointer;">
                      <div>
                        <div>
                          <v-icon>videogame_asset</v-icon>
                        </div>
                        <h3>JEUX-VIDEOS</h3>
                      </div>
                    </v-avatar>
                  </div>

                  <div class="tag" style="bottom:170px; left:190px">
                    <v-avatar v-ripple color="transparent" size="110" style="background-color: rgba(149, 151, 255, 0.9) !important; cursor: pointer;">
                      <div>
                        <div>
                          <v-icon>wb_cloudy</v-icon>
                        </div>
                        <h3>WEB & CODE</h3>
                      </div>
                    </v-avatar>
                  </div>
                  <div class="tag" style="bottom:120px; left:230px">
                    <v-avatar v-ripple color="transparent" size="80" style="background-color: rgba(24, 217, 163, 0.7) !important; cursor: pointer;">
                      <div>
                        <div>
                          <v-icon>ac_unit</v-icon>
                        </div>
                        <h3>SKI</h3>
                      </div>
                    </v-avatar>
                  </div>

                </div>
              </div>
            </v-card-text>
          </v-card>
        </div>

      </v-flex>

    </v-layout>
  </v-container>

</template>

<script>
export default {
  components: {},
  created: function() {},

  methods: {
    getRandomPosition: function(size) {
      var left = Math.round(Math.random() * 500);
      var top = Math.round(Math.random() * 500);

      return {
        top: top / 2,
        left: left / 2
      };
    }
  }
};
</script>

<style>
h1 {
  font-size: 28px;
}

h2 {
  font-size: 23px;
}

h3 {
  font-size: 15px;
}

h4 {
  font-size: 14px;
  font-weight: normal;
  text-transform: none;
}

* {
  font-size: 13px;
}

#main-container {
  max-width: 1300px;
  padding: 5px !important;
}

.profil-block {
  text-transform: uppercase;
  padding: 5px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
}

.triangle {
  width: 20px;
  height: 20px;
  transform: rotate(45deg);
  position: absolute;
  left: -10px;
  top: 30px;
}

.timeline {
  height: 100%;
  border-right: 2px solid #65c178;
  margin-right: 25px;
  position: relative;
  text-align: center;
}

.timeline-point {
  position: absolute;
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: #65c178;
  top: 32px;
  right: -8px;
}

.tags {
  position: relative;
  min-height: 300px;
  overflow: auto;
  max-width: 320px;
  margin: auto;
}

.tag {
  position: absolute;
}
</style>