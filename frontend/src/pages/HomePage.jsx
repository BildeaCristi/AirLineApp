import "./HomePage.css";
import "../App.css";
import "../components/TaskCard/TaskCard";
import TaskCard from "../components/TaskCard/TaskCard";
import {useNavigate} from "react-router-dom";

const HomePage = () => {
    const navigateTables = useNavigate()
    const navigate3a = useNavigate()
    const navigate3b = useNavigate()
    const navigate4a = useNavigate()
    const navigate4b = useNavigate()
    const navigate5a = useNavigate()
    const navigate5b = useNavigate()
    const navigate6a = useNavigate()
    const navigate6b = useNavigate()
    return (
        <div className="backgroundImage1 containerHomePage">
            <TaskCard
                      onClickTables={() => {
                      navigateTables("/tables")
                      }}
                      onClick3a={() => {
                      navigate3a("/exercitiu3a")
                       }}
                      onClick3b={() => {
                          navigate3b("/exercitiu3b")
                      }}
                      onClick4a={() => {
                          navigate4a("/exercitiu4a")
                      }}
                      onClick4b={() => {
                          navigate4b("/exercitiu4b")
                      }}
                      onClick5a={() => {
                          navigate5a("/exercitiu5a")
                      }}
                      onClick5b={() => {
                          navigate5b("/exercitiu5b")
                      }}
                      onClick6a={() => {
                          navigate6a("/exercitiu6a")
                      }}
                      onClick6b={() => {
                          navigate6b("/exercitiu6b")
                      }}
            />
        </div>
    );
}


export default HomePage;