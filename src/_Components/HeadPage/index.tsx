"use client"
import "./index.scss"
import { useEffect, useState } from 'react';

export default function ContadorEJC() {
    const [dias, setDias] = useState(0);
    const [minutos, setMinutos] = useState(0);
    const [segundos, setSegundos] = useState(0);

    useEffect(() => {
        const calcularTempo = () => {
            const dataInicial = new Date('2024-02-02T00:00:00');
            const agora = new Date();

            const diferencaEmMs = agora.getTime() - dataInicial.getTime();

            const segundosTotais = Math.floor(diferencaEmMs / 1000);
            const minutosTotais = Math.floor(segundosTotais / 60);
            const diasTotais = Math.floor(minutosTotais / 1440); // 1440 minutos = 1 dia

            setDias(diasTotais);
            setMinutos(minutosTotais);
            setSegundos(segundosTotais);
        };

        calcularTempo();

        const intervalo = setInterval(calcularTempo, 1000);

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div>
            <h1>Somos Luz da vida há:</h1>
            <p>{dias} dias</p>
            <p>{minutos.toLocaleString()} minutos</p>
            <p>{segundos.toLocaleString()} segundos</p>
        </div>
    );
}
