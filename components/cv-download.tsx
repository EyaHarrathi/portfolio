"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Download, FileText, X } from "lucide-react";

export function CVDownload() {
  const [showPreview, setShowPreview] = useState(false);

  const downloadCV = () => {
    // Create CV content as HTML
    const cvContent = `
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CV - Eya Harrathi</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
        
        .cv-container {
            max-width: 800px;
            margin: 0 auto;
            background: white;
            border-radius: 15px;
            box-shadow: 0 20px 40px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #22c55e, #3b82f6);
            color: white;
            padding: 40px;
            text-align: center;
            position: relative;
        }
        
        .header::before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><defs><pattern id="grain" width="100" height="100" patternUnits="userSpaceOnUse"><circle cx="25" cy="25" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="75" cy="75" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="50" cy="10" r="0.5" fill="rgba(255,255,255,0.1)"/></pattern></defs><rect width="100" height="100" fill="url(%23grain)"/></svg>');
            opacity: 0.3;
        }
        
        .header h1 {
            font-size: 2.5em;
            margin-bottom: 10px;
            position: relative;
            z-index: 1;
        }
        
        .header .title {
            font-size: 1.3em;
            opacity: 0.9;
            position: relative;
            z-index: 1;
        }
        
        .contact-info {
            background: #f8fafc;
            padding: 20px 40px;
            border-bottom: 3px solid #e2e8f0;
        }
        
        .contact-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 15px;
        }
        
        .contact-item {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px;
            background: white;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        
        .contact-icon {
            width: 20px;
            height: 20px;
            background: linear-gradient(135deg, #22c55e, #3b82f6);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 12px;
        }
        
        .content {
            padding: 40px;
        }
        
        .section {
            margin-bottom: 40px;
        }
        
        .section h2 {
            color: #1e293b;
            font-size: 1.5em;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 2px solid #22c55e;
            position: relative;
        }
        
        .section h2::after {
            content: '';
            position: absolute;
            bottom: -2px;
            left: 0;
            width: 50px;
            height: 2px;
            background: #3b82f6;
        }
        
        .profile-text {
            background: linear-gradient(135deg, #f0f9ff, #ecfdf5);
            padding: 25px;
            border-radius: 10px;
            border-left: 4px solid #22c55e;
            font-size: 1.1em;
            line-height: 1.7;
        }
        
        .experience-item, .education-item {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 10px;
            padding: 25px;
            margin-bottom: 20px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.05);
            transition: transform 0.2s ease;
        }
        
        .experience-item:hover, .education-item:hover {
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        
        .job-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
            margin-bottom: 15px;
            flex-wrap: wrap;
            gap: 10px;
        }
        
        .job-title {
            font-size: 1.2em;
            font-weight: bold;
            color: #1e293b;
        }
        
        .job-company {
            color: #3b82f6;
            font-weight: 600;
        }
        
        .job-date {
            background: linear-gradient(135deg, #22c55e, #3b82f6);
            color: white;
            padding: 5px 15px;
            border-radius: 20px;
            font-size: 0.9em;
            font-weight: 600;
        }
        
        .job-description ul {
            list-style: none;
            padding-left: 0;
        }
        
        .job-description li {
            position: relative;
            padding-left: 25px;
            margin-bottom: 8px;
            line-height: 1.6;
        }
        
        .job-description li::before {
            content: '▶';
            position: absolute;
            left: 0;
            color: #22c55e;
            font-size: 0.8em;
        }
        
        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 20px;
        }
        
        .skill-category {
            background: linear-gradient(135deg, #f8fafc, #f1f5f9);
            padding: 20px;
            border-radius: 10px;
            border: 1px solid #e2e8f0;
        }
        
        .skill-category h3 {
            color: #1e293b;
            margin-bottom: 15px;
            font-size: 1.1em;
        }
        
        .skill-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 8px;
        }
        
        .skill-tag {
            background: linear-gradient(135deg, #22c55e, #3b82f6);
            color: white;
            padding: 5px 12px;
            border-radius: 15px;
            font-size: 0.9em;
            font-weight: 500;
        }
        
        .languages-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
            gap: 15px;
        }
        
        .language-item {
            background: white;
            border: 1px solid #e2e8f0;
            border-radius: 8px;
            padding: 15px;
            text-align: center;
            box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        
        .language-name {
            font-weight: bold;
            color: #1e293b;
            margin-bottom: 5px;
        }
        
        .language-level {
            color: #3b82f6;
            font-size: 0.9em;
        }
        
        .interests {
            background: linear-gradient(135deg, #f0f9ff, #ecfdf5);
            padding: 20px;
            border-radius: 10px;
            border-left: 4px solid #3b82f6;
        }
        
        .interests ul {
            list-style: none;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 10px;
        }
        
        .interests li {
            position: relative;
            padding-left: 25px;
            line-height: 1.6;
        }
        
        .interests li::before {
            content: '★';
            position: absolute;
            left: 0;
            color: #3b82f6;
        }
        
        @media (max-width: 768px) {
            .cv-container {
                margin: 10px;
            }
            
            .header, .content {
                padding: 20px;
            }
            
            .contact-info {
                padding: 15px 20px;
            }
            
            .job-header {
                flex-direction: column;
                align-items: flex-start;
            }
        }
        
        @media print {
            body {
                background: white;
                padding: 0;
            }
            
            .cv-container {
                box-shadow: none;
                border-radius: 0;
            }
        }
    </style>
</head>
<body>
    <div class="cv-container">
        <div class="header">
            <h1>Eya Harrathi</h1>
            <div class="title">Développeuse Informatique</div>
        </div>
        
        <div class="contact-info">
            <div class="contact-grid">
                <div class="contact-item">
                    <div class="contact-icon">📍</div>
                    <span>13 rue ibn hazm, Kairouan</span>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">📞</div>
                    <span>+216 99087501</span>
                </div>
                <div class="contact-item">
                    <div class="contact-icon">✉️</div>
                    <span>harrathia79@gmail.com</span>
                </div>
            </div>
        </div>
        
        <div class="content">
            <div class="section">
                <h2>Profil Professionnel</h2>
                <div class="profile-text">
                    Développeuse informatique diplômée, passionnée par la création de solutions innovantes. À la recherche d'opportunités pour contribuer au développement d'applications web et mobiles en mettant à profit mes compétences en programmation full-stack et en design UI/UX.
                </div>
            </div>
            
            <div class="section">
                <h2>Expériences Professionnelles</h2>
                
                <div class="experience-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">Projet Académique : EcoMarket</div>
                            <div class="job-company">Plateforme de commerce social</div>
                        </div>
                        <div class="job-date">2023 – 2024</div>
                    </div>
                    <div class="job-description">
                        <ul>
                            <li>Développement full stack d'une plateforme de commerce entre amis utilisant React.js, Bootstrap 5, Spring Boot, Neo4j et MongoDB</li>
                            <li>Conception d'une architecture réseau innovante où chaque utilisateur développe ses connexions</li>
                            <li>Implémentation d'un système de recommandation basé sur des points pour les intermédiaires</li>
                            <li>Création de deux versions (gratuite et premium) avec fonctionnalités différenciées</li>
                            <li>Travail en méthodologie agile avec 4 sprints de développement</li>
                        </ul>
                    </div>
                </div>
                
                <div class="experience-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">Stage Développeuse Web</div>
                            <div class="job-company">Soretrac Kairouan</div>
                        </div>
                        <div class="job-date">07-2023 – 08-2023</div>
                    </div>
                    <div class="job-description">
                        <ul>
                            <li>Conception et développement d'un site web permettant d'octroyer des bourses aux employés méritants</li>
                            <li>Collaboration avec les équipes internes pour garantir la qualité du projet</li>
                        </ul>
                    </div>
                </div>
                
                <div class="experience-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">Stage Développeuse Front-End</div>
                            <div class="job-company">CyberPark (Société Etnafes)</div>
                        </div>
                        <div class="job-date">06-2024 – 07-2024</div>
                    </div>
                    <div class="job-description">
                        <ul>
                            <li>Développement d'une application web en Nuxt.js pour l'interface utilisateur</li>
                            <li>Contribution à l'amélioration de l'expérience utilisateur (UI/UX)</li>
                            <li>Optimisation des fonctionnalités et réalisation de tâches administratives</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>Formations</h2>
                
                <div class="education-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">Licence en Informatique (GLSI)</div>
                            <div class="job-company">Université Institut Supérieur d'Informatique et de Gestion, Kairouan</div>
                        </div>
                        <div class="job-date">2022 – 2025</div>
                    </div>
                    <div class="job-description">
                        <p><strong>Diplômée en Juin 2025</strong></p>
                        <ul>
                            <li>1ère année : Sciences Informatiques (SI)</li>
                            <li>2ème année : Génie Logiciel et Systèmes Informatiques (GLSI)</li>
                            <li>3ème année : GLSI</li>
                        </ul>
                    </div>
                </div>
                
                <div class="education-item">
                    <div class="job-header">
                        <div>
                            <div class="job-title">Baccalauréat Mathématiques</div>
                            <div class="job-company">Lycée Ibn Rachik, Kairouan</div>
                        </div>
                        <div class="job-date">2021 – 2022</div>
                    </div>
                    <div class="job-description">
                        <p><strong>Mention Bien</strong></p>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>Compétences Techniques</h2>
                <div class="skills-grid">
                    <div class="skill-category">
                        <h3>Langages</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Java</span>
                            <span class="skill-tag">JavaScript</span>
                            <span class="skill-tag">HTML</span>
                            <span class="skill-tag">CSS</span>
                            <span class="skill-tag">Python</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Front-end</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">React.js</span>
                            <span class="skill-tag">Nuxt.js</span>
                            <span class="skill-tag">Vue.js</span>
                            <span class="skill-tag">Bootstrap 5</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Back-end</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Spring Boot</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>Bases de données</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">MySQL</span>
                            <span class="skill-tag">Oracle</span>
                            <span class="skill-tag">MongoDB</span>
                            <span class="skill-tag">Neo4j</span>
                        </div>
                    </div>
                    <div class="skill-category">
                        <h3>UI/UX & Méthodologies</h3>
                        <div class="skill-tags">
                            <span class="skill-tag">Design responsive</span>
                            <span class="skill-tag">Agile</span>
                            <span class="skill-tag">Full Stack</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>Langues</h2>
                <div class="languages-grid">
                    <div class="language-item">
                        <div class="language-name">Français</div>
                        <div class="language-level">Avancé</div>
                    </div>
                    <div class="language-item">
                        <div class="language-name">Anglais</div>
                        <div class="language-level">Intermédiaire</div>
                    </div>
                    <div class="language-item">
                        <div class="language-name">Turc</div>
                        <div class="language-level">Débutant</div>
                    </div>
                    <div class="language-item">
                        <div class="language-name">Espagnol</div>
                        <div class="language-level">Débutant</div>
                    </div>
                </div>
            </div>
            
            <div class="section">
                <h2>Centres d'Intérêt</h2>
                <div class="interests">
                    <ul>
                        <li>Développement web et mobile full stack</li>
                        <li>Nouvelles technologies et innovation</li>
                        <li>Optimisation des expériences utilisateurs (UI/UX)</li>
                        <li>Commerce électronique et plateformes sociales</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</body>
</html>
    `;

    // Create and download the file
    const blob = new Blob([cvContent], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "CV_Eya_Harrathi.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <>
      <Button
        onClick={downloadCV}
        className="btn-primary px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105"
      >
        <Download className="w-5 h-5 mr-2" />
        Télécharger CV
      </Button>

      <Button
        onClick={() => setShowPreview(true)}
        variant="outline"
        className="border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-gray-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 ml-4"
      >
        <FileText className="w-5 h-5 mr-2" />
        Aperçu CV
      </Button>

      {showPreview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Aperçu du CV</h3>
              <div className="flex gap-3">
                <Button
                  onClick={downloadCV}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger
                </Button>
                <Button
                  onClick={() => setShowPreview(false)}
                  variant="ghost"
                  size="icon"
                  className="text-gray-500 hover:text-gray-700"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
            </div>
            <div className="overflow-auto max-h-[calc(90vh-100px)]">
              <CVPreview />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function CVPreview() {
  return (
    <div className="p-8 bg-gray-50">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-green-500 to-blue-500 text-white p-8 text-center">
          <h1 className="text-4xl font-bold mb-2">Eya Harrathi</h1>
          <p className="text-xl opacity-90">Développeuse Informatique</p>
        </div>

        {/* Contact Info */}
        <div className="bg-gray-50 p-6 border-b">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">📍</span>
              <span className="text-sm text-gray-800 font-medium">
                13 rue ibn hazm, Kairouan
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">📞</span>
              <span className="text-sm text-gray-800 font-medium">
                +216 99087501
              </span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <span className="text-green-500">✉️</span>
              <span className="text-sm text-gray-800 font-medium">
                harrathia79@gmail.com
              </span>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Profile */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
              Profil Professionnel
            </h2>
            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <p className="text-gray-700 leading-relaxed">
                Développeuse informatique diplômée, passionnée par la création
                de solutions innovantes. À la recherche d'opportunités pour
                contribuer au développement d'applications web et mobiles en
                mettant à profit mes compétences en programmation full-stack et
                en design UI/UX.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
              Expériences Professionnelles
            </h2>
            <div className="space-y-6">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Projet Académique : EcoMarket
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Plateforme de commerce social
                    </p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    2023 – 2024
                  </span>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    • Développement full stack utilisant React.js, Bootstrap 5,
                    Spring Boot, Neo4j et MongoDB
                  </li>
                  <li>• Conception d'une architecture réseau innovante</li>
                  <li>
                    • Implémentation d'un système de recommandation basé sur des
                    points
                  </li>
                  <li>• Création de deux versions (gratuite et premium)</li>
                  <li>• Travail en méthodologie agile avec 4 sprints</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Stage Développeuse Web
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Soretrac Kairouan
                    </p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    07-2023 – 08-2023
                  </span>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>
                    • Conception et développement d'un site web pour l'octroi de
                    bourses
                  </li>
                  <li>• Collaboration avec les équipes internes</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Stage Développeuse Front-End
                    </h3>
                    <p className="text-blue-600 font-medium">
                      CyberPark (Société Etnafes)
                    </p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    06-2024 – 07-2024
                  </span>
                </div>
                <ul className="text-gray-600 space-y-2 text-sm">
                  <li>• Développement d'une application web en Nuxt.js</li>
                  <li>• Amélioration de l'expérience utilisateur (UI/UX)</li>
                  <li>• Optimisation des fonctionnalités</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
              Formations
            </h2>
            <div className="space-y-4">
              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Licence en Informatique (GLSI)
                    </h3>
                    <p className="text-blue-600 font-medium">ISIGK, Kairouan</p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    2022 – 2025
                  </span>
                </div>
                <p className="text-gray-600 text-sm">Diplômée en Juin 2025</p>
              </div>

              <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      Baccalauréat Mathématiques
                    </h3>
                    <p className="text-blue-600 font-medium">
                      Lycée Ibn Rachik, Kairouan
                    </p>
                  </div>
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm">
                    2021 – 2022
                  </span>
                </div>
                <p className="text-gray-600 text-sm font-semibold">
                  Mention Bien
                </p>
              </div>
            </div>
          </section>

          {/* Skills */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
              Compétences Techniques
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Langages</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Java", "JavaScript", "HTML", "CSS", "Python"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Front-end
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["React.js", "Nuxt.js", "Vue.js", "Bootstrap 5"].map(
                      (skill) => (
                        <span
                          key={skill}
                          className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">Back-end</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                      Spring Boot
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-2">
                    Bases de données
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {["MySQL", "Oracle", "MongoDB", "Neo4j"].map((skill) => (
                      <span
                        key={skill}
                        className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Languages */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
              Langues
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { lang: "Français", level: "Avancé" },
                { lang: "Anglais", level: "Intermédiaire" },
                { lang: "Turc", level: "Débutant" },
                { lang: "Espagnol", level: "Débutant" },
              ].map((item) => (
                <div
                  key={item.lang}
                  className="text-center p-3 bg-gray-50 rounded-lg"
                >
                  <div className="font-semibold text-gray-800">{item.lang}</div>
                  <div className="text-sm text-blue-600">{item.level}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Interests */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b-2 border-green-500 pb-2">
              Centres d'Intérêt
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              <ul className="text-gray-700 space-y-2">
                <li>• Développement web et mobile full stack</li>
                <li>• Nouvelles technologies et innovation</li>
                <li>• Optimisation des expériences utilisateurs (UI/UX)</li>
                <li>• Commerce électronique et plateformes sociales</li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
