import "./App.css";
import Index from "./conatiner/homefunc/Index";
import State from "./conatiner/homefunc/State";
import Parent from "./conatiner/homefunc/Parent";
import Memo from "./conatiner/homefunc/Memo";
import UseEffect1 from "./conatiner/homefunc/UseEffect1";
import ClassLifecycle from "./MyComponents/ClassLifecycle";
import EffectVsMemo from "./MyComponents/EffectVsMemo";
import Ref from "./conatiner/homefunc/Ref";

function App() {
  return (
    <>
      <h5> <u>props in react</u></h5>

      <Index text="hello Everyone" />
      <hr></hr>
      <h5> <u>useState hook</u></h5>
      <State />
      <hr></hr>
      <h5> <u>useEffect hook</u></h5>
      <UseEffect1 />

      <hr></hr>
      <h5> <u>useMemo hook</u></h5>
      <Memo />
      <hr></hr>
      <h5> <u>useCallback hook</u></h5>
      <Parent />
      <hr></hr>
      <h5><u>class component lifecycle</u></h5>
      <ClassLifecycle />
      <hr></hr>
      <h5><u>useEffect vs useMemo</u></h5>
      <EffectVsMemo />
      <hr></hr>
      <h5><u>useRef Hook</u></h5>
      <Ref />
    </>
  )
}

export default App;
