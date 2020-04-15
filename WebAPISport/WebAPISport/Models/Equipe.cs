
namespace WebAPISport.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Equipe
    {
        
        public Equipe()
        {
            this.Joueur = new HashSet<Joueur>();
        }
    
        public int EquipeID { get; set; }
        public string Nom { get; set; }
        public string Ville { get; set; }
        public string Sport { get; set; }
    
       
        public virtual ICollection<Joueur> Joueur { get; set; }
    }
}
