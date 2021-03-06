package com.umsa.unidadeducativa.domain;


import javax.persistence.*;

import java.io.Serializable;
import java.util.Objects;

/**
 * A Ambiente.
 */
@Entity
@Table(name = "ambiente")
public class Ambiente implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "nombre")
    private String nombre;

    @Column(name = "capacidad")
    private Integer capacidad;

    @Column(name = "descripcion")
    private String descripcion;

    // jhipster-needle-entity-add-field - JHipster will add fields here, do not remove
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getNombre() {
        return nombre;
    }

    public Ambiente nombre(String nombre) {
        this.nombre = nombre;
        return this;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Integer getCapacidad() {
        return capacidad;
    }

    public Ambiente capacidad(Integer capacidad) {
        this.capacidad = capacidad;
        return this;
    }

    public void setCapacidad(Integer capacidad) {
        this.capacidad = capacidad;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public Ambiente descripcion(String descripcion) {
        this.descripcion = descripcion;
        return this;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here, do not remove

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Ambiente ambiente = (Ambiente) o;
        if (ambiente.getId() == null || getId() == null) {
            return false;
        }
        return Objects.equals(getId(), ambiente.getId());
    }

    @Override
    public int hashCode() {
        return Objects.hashCode(getId());
    }

    @Override
    public String toString() {
        return "Ambiente{" +
            "id=" + getId() +
            ", nombre='" + getNombre() + "'" +
            ", capacidad=" + getCapacidad() +
            ", descripcion='" + getDescripcion() + "'" +
            "}";
    }
}
