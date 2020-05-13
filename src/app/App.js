import React, {Component} from 'react';

class App extends Component {

    constructor(){
        super();
        this.state = {
            providers: [],
            courses: []
        }
    }

    componentDidMount(){
        this.fetchProviders();
        this.fetchCourses();
    }

    fetchProviders(){
        fetch('/api/providers')
            .then(res => res.json())
            .then(data => {
                this.setState({providers: data});
                console.log(this.state.providers);
            });
    }

    fetchCourses(){
        fetch('https://api.courses.test.cebroker.com/offerings?expand=totalItems&pageIndex=1&pageSize=20&sortField=RELEVANCE&state=FL&profession=36&courseType=CD_ANYTIME')
            .then(res => res.json())
            .then(data => {
                this.setState({courses: data.items});
                console.log(this.state.courses);
            });
    }

    render(){
        return (
            <div>
                <nav className="light-blue darken-4">
                    <div className="container">
                        <a className="brand-logo" href="/">Cebroker</a>
                    </div>
                </nav>

                <div className="card">
                    <div className="card-tabs teal-text">
                        <ul className="tabs tabs-fixed-width light-blue darken-4">
                            <li className="tab"><a className="white-text" href="#content1">Courses</a></li>
                            <li className="tab"><a className="white-text" href="#content2">Providers</a></li>
                        </ul>
                    </div>

                    <div className="card-content">
                        <div id="content1">
                        <div className="row">
                                <div className="col s4">
                                    <div className="card">
                                        <div className="card-content">
                                            <form>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s8">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th></th>
                                                <th>Course</th>
                                                <th>Specialty</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.courses.map(course => {
                                                    return(
                                                        <tr>
                                                            <td><img src={"https://test.storage.cebroker.com/cebroker/" + course.course.featureBanner}></img></td>
                                                            <td>{course.course.name}</td>
                                                            <td>{course.course.provider.name}</td>
                                                        </tr>
                                                    )
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div id="content2">
                            <div className="row">
                                <div className="col s4">
                                    <div className="card">
                                        <div className="card-content">
                                            <form>
                                                
                                            </form>
                                        </div>
                                    </div>
                                </div>
                                <div className="col s8">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Specialty</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.providers.map(provider => {
                                                    if(provider.specialty){
                                                        return(
                                                            <tr>
                                                                <td>{provider.firstName + " " + provider.lastName}</td>
                                                                <td>{provider.specialty.name}</td>
                                                            </tr>
                                                        )
                                                    }
                                                })
                                            }
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                    
                </div>

            </div>
        )
    }
}

export default App;