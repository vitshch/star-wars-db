import React, {Component} from "react";
import "./random-planet.css";
import SwapiService from "../../services";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

class RandomPlanet extends Component {

    swapiService = new SwapiService();

    state = {
        planet: {},
        loading: true,
        error: false
    };

    constructor() {
        super();
        this.updatePlanet();
    }

    onError = (error) => {
        this.setState({
            error: true,
            loading: false
        });
    };

    onPlanetLoaded = (planet) => {
        this.setState({planet, loading: false});
    };

    updatePlanet() {
        const id = Math.floor((Math.random() * 25) + 2);
        this.swapiService.getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch(this.onError)
    };

    render() {
        const { planet, loading, error } = this.state;

        const hasData = !(loading || error);

        const spinner = loading ? <Spinner/> : null;
        const content = hasData ? <PlanetView planet={planet}/> : null;
        const errorIndicator = error ? <ErrorIndicator/> : null;
        return (
            <div className="random-planet card">
                {spinner}
                {content}
                {errorIndicator}
            </div>
        );
    }
};

export default RandomPlanet;

const PlanetView = ({planet}) => {

    const {id, name, population, rotationPeriod, diameter} = planet;

    return (
        <React.Fragment>
            <img className="person-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div className="card-body">
                <div className="card-body">
                    <h4>{name}</h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Population</span>
                            <span>{population}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Rotation Period</span>
                            <span>{rotationPeriod}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Diameter</span>
                            <span>{diameter}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </React.Fragment>

    );
};
