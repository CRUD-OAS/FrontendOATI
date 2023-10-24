<template>
    <div class="container">
        <h1>Resultados de las elecciones</h1>
        <table class="table table-striped">
            <thead>
                <tr>
                    <th>Candidato</th>
                    <th>Partido</th>
                    <th>Fecha</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="voto in this.votos" :key="voto.id">
                    <td>{{ voto.candidato }}</td>
                    <td>{{ voto.partido }}</td>
                    <td>{{ voto.fecha }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
  
<script>
import axios from "axios";
export default {
    data() {
        votos= [];
        const endpoint = "http://localhost:5000/votos/";
        axios.get(endpoint)
            .then((response) => {
                this.votos = response;
            })
            .catch((error) => {
                console.log(error);
            });
        return {
            votos
        };
    },
};
</script>