import { FunctionComponent, useState, useEffect } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import styles from "./Group.module.css";

type GroupType = {
  onClose?: () => void;
};

const Group: FunctionComponent<GroupType> = ({ onClose }) => {
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState<
    string | null
  >(null);
  useEffect(() => {
    const scrollAnimElements = document.querySelectorAll(
      "[data-animate-on-scroll]"
    );
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting || entry.intersectionRatio > 0) {
            const targetElement = entry.target;
            targetElement.classList.add(styles.animate);
            observer.unobserve(targetElement);
          }
        }
      },
      {
        threshold: 0.15,
      }
    );

    for (let i = 0; i < scrollAnimElements.length; i++) {
      observer.observe(scrollAnimElements[i]);
    }

    return () => {
      for (let i = 0; i < scrollAnimElements.length; i++) {
        observer.unobserve(scrollAnimElements[i]);
      }
    };
  }, []);
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.reportBoxReportincidenceParent}>
        <div className={styles.reportBoxReportincidence} />
        <div className={styles.reportBoxReportincidence} />
        <div className={styles.staristicsreportReportinciden}>
          <div className={styles.staristicsreportReportincidenChild} />
          <b className={styles.statisticsReport}>Statistics Report:</b>
        </div>
        <div className={styles.scrollReportincidents} data-animate-on-scroll>
          <ol className={styles.warningsReportincidents}>
            <div className={styles.level3ThomasContainer}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level3}>Level 3</span>
                <span className={styles.span}>{` `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am    weapons                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level3ThomasContainer1}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level3}>Level 3</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.span}>{`Level 1       `}</span>
                <span>{` Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level2ThomasContainer}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level2}>Level 2</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer1}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level3ThomasContainer2}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level3}>{`Level 3 `}</span>
                <span className={styles.span}>{` `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer2}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span> Thomas St - CCTV 12 15/11/2023 Sat 9:30am weapons</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level2ThomasContainer1}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level2}>Level 2</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer3}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer4}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level2ThomasContainer2}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level2}>Level 2</span>
                <span className={styles.span}>{`  `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am    violence `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level1ThomasContainer5}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.span}>{`Level 1  `}</span>
                <span> Thomas St - CCTV 12 15/11/2023 Sat 9:30am violence</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level3ThomasContainer3}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level3}>Level 3</span>
                <span className={styles.span}>{`        `}</span>
                <span>{`Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
            <div className={styles.level2ThomasContainer3}>
              <p className={styles.level3ThomasStCctv}>
                <span className={styles.level2}>Level 2</span>
                <span className={styles.span}>{` `}</span>
                <span>{`      Thomas St - CCTV 12                     15/11/2023 Sat 9:30am                      `}</span>
              </p>
              <p
                className={styles.level3ThomasStCctv}
              >{`                     `}</p>
              <p className={styles.level3ThomasStCctv}>&nbsp;</p>
            </div>
          </ol>
        </div>
        <div className={styles.calendarStatistics}>
          <div className={styles.wrapper}>
            <DatePicker
              value={frameDateTimePickerValue}
              onChange={(newValue: any) => {
                setFrameDateTimePickerValue(newValue);
              }}
              slotProps={{
                textField: {
                  variant: "standard",
                  size: "medium",
                  color: "primary",
                },
              }}
            />
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default Group;
