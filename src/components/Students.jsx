import React, { useEffect, useState } from 'react';
import axios_client from '../config/host-app';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Students() {
    const [listStudent, setListStudent] = useState([]);

    const getAllStudents = () => {
        axios_client.get('/api/etudiant/etudiants')
            .then((response) => {
                setListStudent(response.data);
            })
            .catch((error) => {
                console.log('Error fetching data:', error);
            });
    };

    useEffect(() => {
        getAllStudents();
    }, []);

    return (
        <div className="container mt-5">
            <div className="card shadow p-4">
                <h2 className="text-center mb-4">Liste des Étudiants</h2>
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nom</th>
                            <th>Prénom</th>
                            <th>Date de Naissance</th>
                            <th>Email</th>
                            <th>Téléphone</th>
                            <th>ID Filière</th>
                        </tr>
                    </thead>
                    <tbody>
                        {listStudent.length > 0 ? (
                            listStudent.map((student) => (
                                <tr key={student.id} className="align-middle">
                                    <td>{student.id}</td>
                                    <td>{student.nom}</td>
                                    <td>{student.prenom}</td>
                                    <td>{student.dateNaissance}</td>
                                    <td>{student.email}</td>
                                    <td>{student.telephone}</td>
                                    <td>{student.idFiliere}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="7" className="text-center text-muted">Aucune donnée disponible</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
