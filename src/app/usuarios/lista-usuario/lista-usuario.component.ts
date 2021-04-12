import { Component, AfterViewInit, ViewChild, Inject } from '@angular/core';
import { Usuario } from 'src/app/usuarios/usuario';
import { UsuarioService } from 'src/app/usuarios/usuarios.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})

export class ListaUsuarioComponent implements AfterViewInit {

  dataSource!: MatTableDataSource<Usuario>;
  displayedColumns: string[] = ['name', 'username', 'email', 'actions'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  user: Usuario = new Usuario();

  constructor(private usuarioService: UsuarioService, public dialog: MatDialog) {
    this.usuarioService.obterUsuarios().subscribe(data => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog() {
    const dialogRef = this.dialog.open(ListaUsuarioDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  getInfoUser(id: number){
    this.usuarioService.getUser(id).subscribe(u => {
      this.user = u;
      const dialogRef = this.dialog.open(ListaUsuarioDialogComponent, {
        width: '1000px',
        height: '505px',
        data: this.user
      });
    });
  }
}

@Component({
  selector: 'app-lista-usuario-dialog',
  templateUrl: './lista-usuario-dialog.component.html',
})
export class ListaUsuarioDialogComponent{ 

  constructor
  (
    @Inject(MAT_DIALOG_DATA) public data: Usuario,
    public dialog: MatDialog
  ) { }
}
