interface Services {
    id: string;
    name: string;
    imageUrl: string;
    date: string;
    city: string;
    description: string;
    diagnosticos: Diagnostico[]
}
interface Diagnostico 
{
    id: string|null;
    name: string|null;
    date:string;
    especie:string|number|null;
    estado: string|number|null;
    descripcion: string|null;
}

interface Post {
    id: string;
    name: string;
    imageUrl: string;
    date: string;
    city: string;
    description: string;
}
interface Consulta {
    id: string;
    name: string;
    date: string;
    city: string;
    description: string;
}
interface Vacunas {
    id: string;
    imageUrl: string;
    name: string;
    date: string;
    city: string;
    description: string;
    diagnosticos:Diagnostico[]

}

