using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using WebAPISport.Models;

namespace WebAPISport.Controllers
{
    public class EquipeController : ApiController
    {
        private SportDBEntities db = new SportDBEntities();

        // GET: api/Equipe
        public IQueryable<Equipe> GetEquipe()
        {
            return db.Equipe;
        }

        // GET: api/Equipe/5
        [ResponseType(typeof(Equipe))]
        public IHttpActionResult GetEquipe(int id)
        {
            Equipe equipe = db.Equipe.Find(id);
            if (equipe == null)
            {
                return NotFound();
            }

            return Ok(equipe);
        }

        // PUT: api/Equipe/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEquipe(int id, Equipe equipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != equipe.EquipeID)
            {
                return BadRequest();
            }

            db.Entry(equipe).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EquipeExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Equipe
        [ResponseType(typeof(Equipe))]
        public IHttpActionResult PostEquipe(Equipe equipe)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Equipe.Add(equipe);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = equipe.EquipeID }, equipe);
        }

        // DELETE: api/Equipe/5
        [ResponseType(typeof(Equipe))]
        public IHttpActionResult DeleteEquipe(int id)
        {
            Equipe equipe = db.Equipe.Find(id);
            if (equipe == null)
            {
                return NotFound();
            }

            db.Equipe.Remove(equipe);
            db.SaveChanges();

            return Ok(equipe);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EquipeExists(int id)
        {
            return db.Equipe.Count(e => e.EquipeID == id) > 0;
        }
    }
}