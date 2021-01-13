<template>
  <v-app class="darken-3" :dark="theme==0 ? true : false">
    <v-content>
      <v-container id="main-container">
        <v-layout wrap>
          <v-flex xs12 sm5 class="pa-2">
            <v-card>
              <v-card-text>
                <v-layout>
                  <v-flex xs4>
                    <div style="height:118px; overflow:hidden">
                      <!-- <img style="max-width: 158px; margin-top: -12px; margin-left: -11px;" src="profil.jpg" alt="photo-profil-gorce-pierre"> -->

                      <v-img src="profil.jpg" aspect-ratio="1.3" class="grey lighten-2">
                        <template v-slot:placeholder>
                          <v-layout fill-height align-center justify-center ma-0>
                            <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                          </v-layout>
                        </template>
                      </v-img>
                    </div>
                  </v-flex>
                  <v-flex xs9 pl-3 style="overflow:hidden;">
                    <div style="width:200px;">
                      <h2>Pierre GORCE</h2>
                    </div>
                    <div style="width:200px;">
                      <v-icon left>mail</v-icon>
                      <span>gorce.pierre@gmail.com</span>
                    </div>
                    <div style="width:200px;">
                      <v-icon left>public</v-icon>
                      <a target="_blank" href="https://pierregorce.github.io/">https://pierregorce.github.io/</a>
                    </div>
                    <div class="hidden-print" style="text-align: right;">
                      <v-btn flat icon small @click="theme==0 ? theme=1 : theme=0">
                        <div v-if="theme==0">
                          <v-icon small>brightness_5</v-icon>
                        </div>
                        <div v-if="theme==1">
                          <v-icon small>brightness_2</v-icon>
                        </div>
                      </v-btn>
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
                <h1>Développeur & Architecte Web - Full Stack</h1>
                <div style="font-size:16px;">
                  <v-icon left>format_quote</v-icon>Passionné par le web, le code, l'architecture logiciel, le design et les nouveautés associées ; je travaille actuellement
                  sur la réalisation d'une application web SaaS.
                  <br>Mes préférences se tournent vers la conception, l'architecture, le backend & la mise en place de bonnes pratiques de développement.
                  <v-icon right>format_quote</v-icon>
                </div>
              </v-card-text>
            </v-card>
          </v-flex>

          <v-flex xs12 sm7>
            <div class="pa-2">
              <v-card>
                <v-card-text>
                  <h2 class="mb-2">
                    <v-icon left>work</v-icon>Expériences
                  </h2>

                  <v-layout wrap>
                    <v-flex xs2>
                      <div class="timeline">
                        <h3 class="timeline-date hidden-sm-and-down">2019-2021</h3>
                        <div class="timeline-point"></div>
                      </div>
                    </v-flex>
                    <v-flex xs10>
                      <h3 class="timeline-date text-xs-center hidden-md-and-up">2019-2021</h3>
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>Architecture & Développement, Bazimo - Startup, Editeur logiciel - Montpellier (34)</h3>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Application SaaS de pilotage de patrimoine tertiaire.
                            <a target="_blank" href="https://www.bazimo.fr/">https://www.bazimo.fr/</a>
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Architecture globale & refonte de modules, ajout de fonctionnalités, réalisation de spécifications techniques, amélioration de la base de code existante, mise en place de stratégies de migration & déploiement de base de donnée, garant des bonnes pratiques de développement.
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Mise en place des tests unitaires & d’intégration
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Mise en place de pipelines d’intégration continue & de déploiement continue via Azure DevOps
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Mise en place d'une infrastructure sous docker & d'environnement azure à la demande par branche git (feature branching), utilisation de sh et terraform
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>ASP.NET CORE, DDD, CQRS, EF CORE, REST, Swagger, Autofac, Hangfire, Azure DevOps, Azure, AWS, Jira, Docker, MSSQL
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex xs12>
                      <v-layout>
                        <v-flex xs2>
                          <div class="timeline">
                            <div class="pt-3"></div>
                          </div>
                        </v-flex>
                        <v-flex xs10></v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="timeline">
                        <h3 class="timeline-date hidden-sm-and-down">2018</h3>
                        <div class="timeline-point"></div>
                      </div>
                    </v-flex>
                    <v-flex xs10>
                      <h3 class="timeline-date text-xs-center hidden-md-and-up">2018</h3>
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>Concepteur Développeur, Enovalp - Agence Web - Grenoble (38)</h3>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Architecture & Réalisation d'une plateforme/produit ecommerce SaaS (essentiellement pour libraires) ; front-office + backoffice, clients multiples & cloud
                            (exemples :
                            <a
                              target="_blank"
                              href="https://www.icigrandsboulevards.fr/"
                            >https://www.icigrandsboulevards.fr/</a>
                            ,
                            <a target="_blank" href="https://www.appeldulivre.fr/">https://www.appeldulivre.fr/</a>
                            ,
                            <a target="_blank" href="https://www.librairiepradoparadis.fr/">https://www.librairiepradoparadis.fr/</a>
                            )
                          </div>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Catalogue produit, dialogue avec la gestion du magasin, Cms complet, Marketing, Promotions, Emailing, Paiements, Commandes, Gestion d'utilisateur
                            & permissions...
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Référent technique & aide aux autres développeurs
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>ASP.NET CORE, EF CORE, REST, Swagger, Autofac, Hangfire, Cache, JWT, Azure DevOps (VSTS), Azure, AWS, VueJS, Nuxt, Vuetify, Webpack, Npm, NodeJS, Trello
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex xs12>
                      <v-layout>
                        <v-flex xs2>
                          <div class="timeline">
                            <div class="pt-3"></div>
                          </div>
                        </v-flex>
                        <v-flex xs10></v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="timeline">
                        <h3 class="timeline-date hidden-sm-and-down">2016 - 2017</h3>
                        <div class="timeline-point"></div>
                      </div>
                    </v-flex>
                    <v-flex xs10>
                      <h3 class="timeline-date text-xs-center hidden-md-and-up">2016 - 2017</h3>
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>Concepteur Développeur, Enovalp - Agence Web - Grenoble (38)</h3>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Refonte & Conception de la gestion article - migration de la base de donnée pour le diffuseur Sofédis (
                            <a
                              target="_blank"
                              href="http://www.sofedis.fr/"
                            >http://www.sofedis.fr/</a>).
                          </div>

                          <div class="pa-1">
                            <v-icon>chevron_right</v-icon>Applicatif de gestion de base article, éditeurs, parutions...
                          </div>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>2 nouveaux sites : Editeur & Administrateur, architecture, conception, développement.
                          </div>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Nombreux export & import : Pdf, Excel, Ftp & Api Rest
                          </div>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Définition des spécifications, suivi de projet, suivi du développement, coding
                          </div>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>ASP.NET CORE, Entity & Identity Framework, C#, SQL Server, Git, VueJS, Trello
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex xs12>
                      <v-layout>
                        <v-flex xs2>
                          <div class="timeline">
                            <div class="pt-3"></div>
                          </div>
                        </v-flex>
                        <v-flex xs10></v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="timeline">
                        <h3 class="timeline-date hidden-sm-and-down">2015 - 2016</h3>
                        <div class="timeline-point"></div>
                      </div>
                    </v-flex>
                    <v-flex xs10>
                      <h3 class="timeline-date text-xs-center hidden-md-and-up">2015 - 2016</h3>
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>Concepteur Développeur, Enovalp - Agence Web - Grenoble (38)</h3>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Projet : Refonte complète et migration des 4 sites de la librairie Molat (
                            <a target="_blank" href="https://www.mollat.com">https://www.mollat.com</a>)
                          </div>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>CMS, Site e-commerce, Site Pro, Site culturel, Blogs. Plateforme big data (analyse & profiling utilisateur)
                          </div>

                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Conception des modèles de données SQL, Architecture du CMS, Creation & Utilisation d'API de dialogue avec le système de gestion
                            interne
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Refonte des schémas SQL & ré-écriture de l'ensemble du système e-commerce
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Réalisation des pages clients, workflow de commande & paiement, SSO (3 domaines)
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>ecommerce sous forme d'un CMS complet, newsletter, permissions...
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>Plateforme MongoDB : tracking, analyse & profiling utilisateur
                          </div>
                          <div class="pa-0">
                            <v-icon>chevron_right</v-icon>ASP.NET MVC5, Entity & Identity Framework, C# & VB.NET, Html, Css, Responsive, MySql, SOAP & REST, Js, Git, Azure, MongoDB
                          </div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex xs12>
                      <v-layout>
                        <v-flex xs2>
                          <div class="timeline">
                            <div class="pt-3"></div>
                          </div>
                        </v-flex>
                        <v-flex xs10></v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="timeline">
                        <h3 class="timeline-date hidden-sm-and-down">2015</h3>
                        <div class="timeline-point"></div>
                      </div>
                    </v-flex>
                    <v-flex xs10>
                      <h3 class="timeline-date text-xs-center hidden-md-and-up">2015</h3>
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <v-expansion-panel :value="0">
                            <v-expansion-panel-content>
                              <template v-slot:header>
                                <h3>Projet Personnel - Application/Jeux Android</h3>
                              </template>
                              <template v-slot:actions>
                                <v-icon class="hidden-print">$vuetify.icons.expand</v-icon>
                              </template>
                              <div>
                                <div class="pa-0">
                                  <v-icon>chevron_right</v-icon>Développement d'un jeu vidéo Android grand public. Utilisation de la librairie multiplateforme LibGDX en Java & Exploration d'Unity.
                                </div>

                                <div class="pa-0">
                                  <v-icon>chevron_right</v-icon>Conception, Architecture, Code (Java) & Algorithms (Path finding, Finite State Machine for IA, Collision, Pooling for mobile optimization, Particle, Physics, Steering behaviour, Vector...), Integration (Play Store IAP, Admob), Graphism (Pixel Art) & Level Design.
                                </div>
                                <div class="pa-0">
                                  <v-icon>chevron_right</v-icon>Publication sur le Play Store Android :
                                  <a
                                    target="_blank"
                                    href="https://play.google.com/store/apps/details?id=com.oasix.crazyshooter.android"
                                  >https://play.google.com/store/apps/details?id=com.oasix.crazyshooter.android</a>
                                </div>
                              </div>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex xs12>
                      <v-layout>
                        <v-flex xs2>
                          <div class="timeline">
                            <div class="pt-3"></div>
                          </div>
                        </v-flex>
                        <v-flex xs10></v-flex>
                      </v-layout>
                    </v-flex>

                    <v-flex xs2>
                      <div class="timeline">
                        <h3 class="timeline-date hidden-sm-and-down">2011 - 2014</h3>
                        <div class="timeline-point"></div>
                      </div>
                    </v-flex>
                    <v-flex xs10>
                      <h3 class="timeline-date text-xs-center hidden-md-and-up">2011 - 2014</h3>
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <v-expansion-panel :value="1">
                            <v-expansion-panel-content>
                              <template v-slot:header>
                                <h3>Chargé d’études (thermiques, énergies, environnementales) en batiment, OASIIS - Bureau d'étude HQE- Aubagne (13)</h3>
                              </template>
                              <template v-slot:actions>
                                <v-icon class="hidden-print">$vuetify.icons.expand</v-icon>
                              </template>
                              <div>
                                <div>
                                  <div class="pa-0">
                                    <v-icon>chevron_right</v-icon>Mise en place de documents charte graphique avec automatisation / automatisation de certaines procédures
                                  </div>
                                  <div class="pa-0">
                                    <v-icon>chevron_right</v-icon>Réalisation de Simulation Thermique Dynamique (STD) de calcul de besoin, consommations et estimation du confort estival
                                  </div>
                                  <div class="pa-0">
                                    <v-icon>chevron_right</v-icon>Réglementation Thermique (2005, 2012 et Existant) et études de faisabilité en énergies (pièces nécessaires aux dépôts des
                                    permis de construire).
                                  </div>
                                  <div class="pa-0">
                                    <v-icon>chevron_right</v-icon>Calcul d'éclairage naturel (FLJ), d'ensoleillement, d'ombre
                                  </div>
                                  <div class="pa-0">
                                    <v-icon>chevron_right</v-icon>Dimensionnement précis de protections solaires
                                  </div>
                                  <div class="pa-0">
                                    <v-icon>chevron_right</v-icon>Etudes et dimensionnement des énergies renouvelables (panneaux solaire, thermiques, géothermie...)
                                  </div>

                                  <div class="pa-0">
                                    <v-icon>chevron_right</v-icon>Réalisation/Mise à jour d’outils Excel thermiques, administratifs, de gestion de projet et de management
                                  </div>
                                </div>
                              </div>
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-card-text>
                      </v-card>
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
                  <h2 class="mb-3">
                    <v-icon left>settings</v-icon>Compétences
                  </h2>
                  <h3>
                    <v-icon left>build</v-icon>Back-End
                  </h3>

                  <v-layout align-center>

                    <v-flex xs7 align-center>
                      <div class="mb-2" />
                      C#, ASP.NET CORE (+MVC), LINQ, 
                      <div class="mb-2" />
                      Tests unitaires & fonctionnels (MsTest, NUnit),
                      <div class="mb-2" />
                      Architecture (Layered, CQRS), Multitenancy/SaaS
                       </v-flex>
                    <v-flex xs5 pl-2>
                      <!-- <div class="progress-value">45</div> -->
                      <v-progress-linear value="95" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>

                  <v-layout align-center mt-3>
                    <v-flex
                      xs7
                    >
                    ORM (EF6, EF CORE), 
                    
                    <div class="mb-2" />

                    REST (Swagger), 
                    SOAP, 
                    Auth (JWT, Identity Framework), 

                    <div class="mb-2" />

                    Patterns DDD,
                    Injection de dépendances, 
                    Event bus, Outbox Pattern, Background services (Hangfire), 
                    Cache (InMemory, Distribué), 
                    Logs (Serilog),
                  
                    </v-flex>
                    <v-flex xs5 pl-2>
                      <v-progress-linear value="95" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>
                </v-card-text>

                <v-card-text>
                  <h3>
                    <v-icon left>gradient</v-icon>Front-End
                  </h3>
                  <v-layout align-center>
                    <v-flex xs7>Javascript (Npm, Webpack, NodeJS, VueJS, Vuex, VueRouter), SSR (NuxtJS)</v-flex>
                    <v-flex xs5 pl-2>
                      <v-progress-linear value="75" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>

                  <v-layout align-center mt-1>
                    <v-flex xs7>CSS (SASS), HTML, Responsive, UI (Bootstrap, Vuetify), JQuery</v-flex>
                    <v-flex xs5 pl-2>
                      <v-progress-linear value="90" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>
                </v-card-text>

                <v-card-text>
                  <h3>
                    <v-icon left>dns</v-icon>Ops
                  </h3>
                  <v-layout align-center>
                    <v-flex xs7>Intégration continue (Azure DevOps), Déploiement continu (Azure DevOp), Cloud Azure, Cloud AWS</v-flex>
                    <v-flex xs5 pl-2>
                      <v-progress-linear value="75" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>
                  <v-layout align-center>
                    <v-flex xs7>Docker, DockerCompose, Shell-Bash</v-flex>
                    <v-flex xs5 pl-2>
                      <v-progress-linear value="55" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>
                </v-card-text>

                <v-card-text>
                  <h3>
                    <v-icon left>fas fa-database</v-icon>Data
                  </h3>

                  <v-layout align-center>
                    <v-flex xs7>Relationnel (MySQL, SQL Server, PostGreSQL)</v-flex>
                    <v-flex xs5 pl-2>
                      <v-progress-linear value="90" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>

                  <v-layout align-center>
                    <v-flex xs7>Document (MongoDB)</v-flex>
                    <v-flex xs5 pl-2>
                      <v-progress-linear value="65" height="20" color="green"></v-progress-linear>
                    </v-flex>
                  </v-layout>

                </v-card-text>

                <v-card-text>
                  <h3>
                    <v-icon left>extension</v-icon>Autres
                  </h3>

                  <div>
                    <v-chip disabled label>Architecture Web & Cloud</v-chip>
                    <v-chip disabled label>Clean Code</v-chip>
                    <v-chip disabled label>DDD</v-chip>
                    <v-chip disabled label>Code Review</v-chip>
                    <v-chip disabled label>Pair programming</v-chip>

                    <v-chip disabled label>Trello</v-chip>
                    <v-chip disabled label>Git</v-chip>
                    <v-chip disabled label>Photoshop</v-chip>
                    <v-chip disabled label>Illustator</v-chip>
                    <v-chip disabled label>VBA (Excel)</v-chip>
                    <v-chip disabled label>VB.NET</v-chip>
                  </div>
                </v-card-text>
              </v-card>
            </div>

            <div class="pa-2">
              <v-card>
                <v-card-text>
                  <h2>
                    <v-icon left>terrain</v-icon>Loisirs
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

                      <div class="tag" style="bottom:150px; left:110px">
                        <v-avatar v-ripple color="transparent" size="100" style="background-color: rgba(0, 191, 221, 0.9) !important; cursor: pointer;">
                          <div>
                            <div>
                              <v-icon>far fa-paper-plane</v-icon>
                            </div>
                            <h3>KITESURF</h3>
                          </div>
                        </v-avatar>
                      </div>

                      <div class="tag" style="bottom:95px; left:80px">
                        <v-avatar v-ripple color="transparent" size="80" style="background-color: rgba(197, 214, 54, 0.8) !important; cursor: pointer;">
                          <div>
                            <div>
                              <v-icon>restaurant_menu</v-icon>
                            </div>
                            <h3>CUISINE</h3>
                          </div>
                        </v-avatar>
                      </div>

                      <div class="tag" style="bottom:80px; left:150px">
                        <v-avatar v-ripple color="transparent" size="80" style="background-color: rgba(1, 0, 0, 0.4) !important; cursor: pointer;">
                          <div>
                            <div>
                              <v-icon>videogame_asset</v-icon>
                            </div>
                            <h3>JEUX-VIDEOS</h3>
                          </div>
                        </v-avatar>
                      </div>

                      <div class="tag" style="bottom:170px; left:190px">
                        <v-avatar v-ripple color="transparent" size="120" style="background-color: rgba(149, 151, 255, 0.9) !important; cursor: pointer;">
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

          <v-flex xs12>
            <div class="pa-2">
              <v-card>
                <v-card-text>
                  <h2 class="mb-2">
                    <v-icon left>account_balance</v-icon>Formation
                  </h2>
                  <v-layout wrap>
                    <v-flex md1 sm12 xs12 pa-2></v-flex>
                    <v-flex md2 sm12 xs12 pa-2 class="timeline-horizontal">
                      <div class="timeline-point"></div>
                      <v-card flat class="cv-card">
                        <v-card-text>
                          <h3 class="text-xs-center">2006 - 2007</h3>
                          <h3 class="text-xs-center">BAC</h3>
                          <div class="pa-3">Baccalauréat Général Série S - Mention AB - Privas (07)</div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex md2 sm12 xs12 pa-2 class="timeline-horizontal">
                      <div class="timeline-point"></div>
                      <v-card flat class="cv-card">
                        <v-card-text>
                          <h3 class="text-xs-center">2007 - 2008</h3>
                          <h3 class="text-xs-center">Classe Préparatoire</h3>
                          <div class="pa-3">Classe préparatoire école d'ingénieur (E.S.I.S.A.R) - Valence (26)</div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex md2 sm12 xs12 pa-2 class="timeline-horizontal">
                      <div class="timeline-point"></div>
                      <v-card flat class="cv-card">
                        <v-card-text>
                          <h3 class="text-xs-center">2008 - 2010</h3>
                          <h3 class="text-xs-center">BAC+2</h3>
                          <div class="pa-3">DUT Génie Thermique et Energie - Université Joseph Fourier - Grenoble (38)</div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex md2 sm12 xs12 pa-2 class="timeline-horizontal">
                      <div class="timeline-point"></div>
                      <v-card flat class="cv-card">
                        <v-card-text>
                          <h3 class="text-xs-center">2010 - 2011</h3>
                          <h3 class="text-xs-center">BAC+3</h3>
                          <div class="pa-3">Licence Professionnelle Chargé d’Affaires en Génie Climatique - Mention AB - Université Blaise Pascal - Montluçon (03)</div>
                        </v-card-text>
                      </v-card>
                    </v-flex>

                    <v-flex md2 sm12 xs12 pa-2 class="timeline-horizontal">
                      <div class="timeline-point"></div>
                      <v-card flat class="cv-card">
                        <v-card-text>
                          <h3 class="text-xs-center">2014 - 2015</h3>
                          <h3 class="text-xs-center">BAC+4</h3>
                          <div class="pa-3">Concepteur-développeur informatique Option J2EE - AFPA - Pont de Claix (38)</div>
                        </v-card-text>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-card-text>

                <v-card-text style="display:none;">
                  <v-layout wrap>
                    <v-flex xs3>
                      <div class="timeline">
                        <h3 class="pt-4 pr-3">2014 - 2015</h3>
                        <div class="timeline-point"></div>
                      </div>
                    </v-flex>
                    <v-flex xs9>
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>BAC+4</h3>
                          <div class="pa-0">Concepteur-développeur informatique Option J2EE - AFPA - Pont de Claix (38)</div>
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
                        <v-flex xs9></v-flex>
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
                      <v-card flat color="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>BAC+3</h3>
                          <div class="pa-0">Licence Professionnelle Chargé d’Affaires en Génie Climatique - Mention AB - Université Blaise Pascal - Montluçon (03)</div>
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
                        <v-flex xs9></v-flex>
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
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>BAC+2</h3>
                          <div class="pa-0">DUT Génie Thermique et Energie - Université Joseph Fourier - Grenoble (38)</div>
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
                        <v-flex xs9></v-flex>
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
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>Classe Préparatoire</h3>
                          <div class="pa-0">Classe préparatoire école d'ingénieur (E.S.I.S.A.R) - Valence (26)</div>
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
                        <v-flex xs9></v-flex>
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
                      <v-card flat class="cv-card">
                        <div class="cv-card triangle"></div>
                        <v-card-text>
                          <h3>BAC</h3>
                          <div class="pa-0">Baccalauréat Général Série S - Mention AB - Privas (07)</div>
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
                        <v-flex xs9></v-flex>
                      </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card-text>
              </v-card>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  components: {},
  data: function () {
    return {
      theme: 1
    }
  },
  created: function () { },

  methods: {
    getRandomPosition: function (size) {
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

<style lang="scss">
</style>