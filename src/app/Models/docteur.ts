export interface Docteur {
  docteur_id?: 0;
  docteur_nom?: '';
  prenom?: '';
  tele_portable?: '';
  sexe?: '';
  a_propos?: '';
  code_postal?: '';
  prix_visite?: '';
  ville?: {
    ville_id: 0;
    nom: '';
  }
  ;
  position?: {
    position_id: 0;
    latitude: '';
    longitude: '';
  };
  specialites?: [
    {
      specialite_id: 0;
      nom: '';
      docteurs_count: 0;
    }
  ];
  services?: [
    {
      service_id: 0;
      service_nom: '';
      service_prix: 0;
    }
  ];
  educations?: [
    {
      degre: '';
      universite: '';
      annee: 0;
    }
  ];
  experiences?: [
    {
      hospitale: '';
      debut: '';
      fin: '';
    }
  ];
  awards?: [
    {
      award: '';
      annee: 0;
    }
  ];
}
