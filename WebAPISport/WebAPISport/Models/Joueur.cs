//------------------------------------------------------------------------------
// <auto-generated>
//     Ce code a été généré à partir d'un modèle.
//
//     Des modifications manuelles apportées à ce fichier peuvent conduire à un comportement inattendu de votre application.
//     Les modifications manuelles apportées à ce fichier sont remplacées si le code est régénéré.
// </auto-generated>
//------------------------------------------------------------------------------

namespace WebAPISport.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Joueur
    {
        public int JoueurID { get; set; }
        public Nullable<int> EquipeID { get; set; }
        public string Nom { get; set; }
        public string Prenom { get; set; }
        public Nullable<System.DateTime> DateNaissance { get; set; }
        public string Sexe { get; set; }
        public Nullable<int> Numero { get; set; }
    
        public virtual Equipe Equipe { get; set; }
    }
}
