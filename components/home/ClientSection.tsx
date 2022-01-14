import  { useRef}  from "react";
import {Scrollspy, useScrollspy} from './scrollpy/index'

const SIZE = 5;
const list = new Array(SIZE).fill(0);

export default function App() {
  let sectionRefs: any= [] 
  for(let i =0;i<SIZE;i++){
    sectionRefs.push(useRef<HTMLDivElement>(null))
  }
  const {currentElementIndexInViewport} = useScrollspy({sectionRefs})
  return (
    <div className="App">
    
          <div>
            <ul
              style={{
                listStyle: "none",
                position: "fixed",
                top: 0,
                right: 0,
                backgroundColor: "#fff",
                padding: "1rem"
              }}
            >
              {list.map((_, i) => (
                <li
                  key={i}
                  className={
                    currentElementIndexInViewport === i ? "active" : ""
                  }
                >
                  <a
                    // href={`#section-${i}`}
                    style={{
                      color:
                        currentElementIndexInViewport === i ? "#f00" : "#222"
                    }}
                  >
                    section-{i}
                  </a>
                </li>
              ))}
            </ul>
            <div >
              {list.map((_, i) => (
                <div
                  key={i}
                  ref={sectionRefs[i]}
                  className={
                    currentElementIndexInViewport === i ? "active" : ""
                  }
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "500px",
                    backgroundColor: `#${i}${i}${i}`,
                    color: "#fff",
                    fontSize: "2rem"
                  }}
                >
                  {i}
                </div>
              ))}
            </div>
          </div>
 
    </div>
  );
}
