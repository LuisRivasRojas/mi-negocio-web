import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SeoService } from '../../services/seo.service';

interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  imagen: string;
  categoria: string;
}

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss']
})
export class ProductosComponent implements OnInit {
  
  productos: Producto[] = [
    {
      id: 1,
      nombre: 'Producto Premium',
      descripcion: 'Nuestro producto más avanzado con características de última generación.',
      precio: 299.99,
      imagen: '💎',
      categoria: 'Premium'
    },
    {
      id: 2,
      nombre: 'Solución Empresarial',
      descripcion: 'Perfecto para empresas que buscan eficiencia y escalabilidad.',
      precio: 499.99,
      imagen: '🏢',
      categoria: 'Empresarial'
    },
    {
      id: 3,
      nombre: 'Kit Básico',
      descripcion: 'Ideal para comenzar con todas las funcionalidades esenciales.',
      precio: 99.99,
      imagen: '📦',
      categoria: 'Básico'
    },
    {
      id: 4,
      nombre: 'Servicio Profesional',
      descripcion: 'Asesoría personalizada y soporte técnico especializado.',
      precio: 199.99,
      imagen: '👨‍💼',
      categoria: 'Servicios'
    },
    {
      id: 5,
      nombre: 'Solución Cloud',
      descripcion: 'Acceso desde cualquier lugar con máxima seguridad y disponibilidad.',
      precio: 149.99,
      imagen: '☁️',
      categoria: 'Cloud'
    },
    {
      id: 6,
      nombre: 'Paquete Completo',
      descripcion: 'Todo lo que necesitas en un solo paquete con descuento especial.',
      precio: 799.99,
      imagen: '🎁',
      categoria: 'Completo'
    }
  ];

  categorias = ['Todos', 'Premium', 'Empresarial', 'Básico', 'Servicios', 'Cloud', 'Completo'];
  categoriaSeleccionada = 'Todos';

  constructor(private seoService: SeoService) { }

  ngOnInit(): void {
    this.seoService.updateTitle('Productos - Mi Negocio | Catálogo completo de productos y servicios');
    this.seoService.updateMetaTags(
      'Explora nuestro catálogo completo de productos y servicios. Desde soluciones básicas hasta paquetes empresariales premium.',
      'productos, servicios, catálogo, soluciones, empresarial, premium, básico, cloud',
      'https://minegocio.com/assets/og-productos.jpg'
    );
    this.seoService.updateCanonicalUrl('https://minegocio.com/productos');
  }

  filtrarProductos(): Producto[] {
    if (this.categoriaSeleccionada === 'Todos') {
      return this.productos;
    }
    return this.productos.filter(producto => producto.categoria === this.categoriaSeleccionada);
  }

  seleccionarCategoria(categoria: string): void {
    this.categoriaSeleccionada = categoria;
  }

}
