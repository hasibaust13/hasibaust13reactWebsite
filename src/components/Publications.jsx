import React from "react";
import { useState } from "react";

const Publications = () => {
  const [pubType, setPubType] = React.useState("All");
  const [isAll, setIsAll] = useState(true);
  const [isJournal, setIsJournal] = useState(false);
  const [isConference, setIsConference] = useState(false);
  const [isBookChapter, setIsBookChapter] = useState(false);
  const [isDataset, setIsDataset] = useState(false);

  function handleAll() {
    setPubType("All");
    setIsAll(true);
    setIsJournal(false);
    setIsConference(false);
    setIsBookChapter(false);
    setIsDataset(false);
  }

  function handleJournal() {
    setPubType("Journal");
    setIsJournal(true);
    setIsConference(false);
    setIsBookChapter(false);
    setIsAll(false);
    setIsDataset(false);
  }
  function handleConference() {
    setPubType("Conference");
    setIsConference(true);
    setIsJournal(false);
    setIsBookChapter(false);
    setIsAll(false);
    setIsDataset(false);
  }
  function handleBookChapter() {
    setPubType("Book Chapter");
    setIsBookChapter(true);
    setIsConference(false);
    setIsJournal(false);
    setIsAll(false);
    setIsDataset(false);
  }

  function handleDataset() {
    setPubType("Dataset");
    setIsBookChapter(false);
    setIsConference(false);
    setIsJournal(false);
    setIsDataset(true);
    setIsAll(false);
  }

  
  const publications = [
    {
      title: "A Survey of Methods for Managing the Classification and Solution of Data Imbalance Problem",
      journal: "Journal of Computer Science",
      quartiles: "Q2",
      type: "Journal",
      year: "2020",
      link: "https://doi.org/10.3844/jcssp.2020.1546.1557",
    },
    {
      title: "A Comparative Study of AHP and Fuzzy AHP Method for Inconsistent Data",
      journal: "International Journal of Sciences: Basic and Applied Research",
      quartiles: "Q3",
      type: "Journal",
      year: "2020",
      link: "#",
    },
    {
      title: "AlzheimerNet: An Effective Deep Learning Based Proposition for Alzheimer's Disease Stages Classification",
      journal: "IEEE Access",
      quartiles: "Q1",
      type: "Journal",
      year: "2023",
      link: "https://doi.org/10.1109/ACCESS.2023.16376",
    },
    {
      title: "Depression Detection From Social Networks Data Based on Machine Learning and Deep Learning Techniques",
      journal: "IEEE Transactions on Computational Social Systems",
      quartiles: "Q1",
      type: "Journal",
      year: "2023",
      link: "https://doi.org/10.1109/TCSS.2023.1568",
    },
    {
      title: "Strategies for Enhancing the Performance of News Article Classification in Bangla",
      journal: "Engineering Applications of Artificial Intelligence",
      quartiles: "Q1",
      type: "Journal",
      year: "2023",
      link: "https://doi.org/10.1016/j.engappai.2023.106688",
    },
    {
      title: "BMNet-5: A Novel Approach of Neural Network to Classify the Genre of Bengali Music Based on Audio Features",
      journal: "IEEE Access",
      quartiles: "Q1",
      type: "Journal",
      year: "2022",
      link: "https://doi.org/10.1109/ACCESS.2022.108545",
    },
    {
      title: "Convolutional Auto-Encoder and Independent Component Analysis Based Automatic Place Recognition",
      journal: "Human-Centric Intelligent Systems",
      quartiles: "Q2",
      type: "Journal",
      year: "2022",
      link: "#",
    },
    {
      title: "3D Gesture Recognition and Adaptation for Human-Robot Interaction",
      journal: "IEEE Access",
      quartiles: "Q1",
      type: "Journal",
      year: "2022",
      link: "https://doi.org/10.1109/ACCESS.2022.116485",
    },
    {
      title: "Crash Severity Analysis and Risk Factors Identification Based on Alternate Data Source: A Case Study of Developing Country",
      journal: "Scientific Reports",
      quartiles: "Q1",
      type: "Journal",
      year: "2022",
      link: "#",
    },
    {
      title: "MNet-10: A Robust Shallow CNN Model Performing Ablation Study on Medical Images",
      journal: "Frontiers in Medicine",
      quartiles: "Q1",
      type: "Journal",
      year: "2022",
      link: "#",
    },
    {
      title: "SkinNet16: A Deep Learning Approach to Identify Benign and Malignant Skin Lesions",
      journal: "Frontiers in Oncology",
      quartiles: "Q1",
      type: "Journal",
      year: "2022",
      link: "#",
    },
    {
      title: "HSDLM: A Hybrid Sampling with Deep Learning Method for Imbalanced Data Classification",
      journal: "International Journal of Cloud Applications and Computing",
      quartiles: "Q2",
      type: "Journal",
      year: "2021",
      link: "#",
    },
    {
      title: "Efficient Prediction of Water Quality Index WQI Using Machine Learning Algorithm",
      journal: "Human-Centric Intelligent Systems",
      quartiles: "Q2",
      type: "Journal",
      year: "2021",
      link: "#",
    }
  ];
  
  return (
    <div>
      <header>
        <h2 class="h2 article-title">Publications</h2>
      </header>
      <section class="timeline">
        <div className="jinfo pb">
          <button
            className={isAll ? "jbtn" : "jbtn2"}
            type="button"
            onClick={handleAll}
          >
            All({publications.map((publication) => publication.type).length} )
          </button>
          <button
            className={isJournal ? "jbtn" : "jbtn2"}
            type="button"
            onClick={handleJournal}
          >
            Journal(
            {
              publications.filter(
                (publication) => publication.type === "Journal"
              ).length
            }
            )
          </button>
          <button
            className={isConference ? "jbtn" : "jbtn2"}
            type="button"
            onClick={handleConference}
          >
            Conference({" "}
            {
              publications.filter(
                (publication) => publication.type === "Conference"
              ).length
            }
            )
          </button>
          <button
            className={isBookChapter ? "jbtn" : "jbtn2"}
            type="button"
            onClick={handleBookChapter}
          >
            Book Chapter(
            {
              publications.filter(
                (publication) => publication.type === "Book Chapter"
              ).length
            }
            )
          </button>

          <button
            className={isDataset ? "jbtn" : "jbtn2"}
            type="button"
            onClick={handleDataset}
          >
            Dataset( 2 )
          </button>
        </div>
        <div class="cads">
          {publications.map((publication) =>
            pubType === publication.type || pubType == "All" ? (
              <>
                <div className="jlist">
                  <div className="jitem">
                    <div className="flex"></div>({publication.year}){" "}
                    <a
                      href={publication.link}
                      className="text-link"
                      target="_blank"
                    >
                      {publication.title}
                    </a>
                    <br />
                    {publication.journal}{" "}
                    {publication.type == "Journal" && (
                      <>({publication.quartiles})</>
                    )}
                    <div className="author"></div>
                  </div>
                </div>
                {/* <div class="card">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <img id="hover" src={publication.img} alt="Hot air balloons" />
                    <div id="stuff">{publication.journal}</div>
                    <div class="card-item">
                      <div class="title">{publication.title}</div>
                      <div className="">
                        <div class="year">{publication.year}</div>
                      </div>
                    </div>
                  </a>
                </div> */}
              </>
            ) : pubType === "" ? (
              <>
                {/* <div class="card">
                  <a href={publication.link} target="_blank" rel="noopener noreferrer">
                    <img id="hover" src={publication.img} alt="Hot air balloons" />
                    <div id="stuff">{publication.journal}</div>
                    <div class="card-item">
                      <div class="title">{publication.title}</div>
                      <div className="">
                        <div class="year">{publication.year}</div>
                      </div>
                    </div>
                  </a>
                </div> */}
              </>
            ) : null
          )}
        </div>
        {/* <div className="alert2 text-center mt">Rest of the publications will be added soon.</div> */}
      </section>
    </div>
  );
};

export default Publications;
