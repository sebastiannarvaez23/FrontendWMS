from .queries import query_get_request_quantity_by_saleorder, query_get_picking_quantity_by_saleorder, query_get_picking_quantity_by_customer, query_get_request_quantity_by_customer
import sqlite3

class ConnSQLite3:
    def __init__(self):
        try:
            self.connection = sqlite3.connect("db.sqlite3")
            self.cursor = self.connection.cursor()
            print("successful connection!")
        except Exception as e:
            print(e)
        
    def get_picking_quantity_by_customer(self, name_customer):
        """
         Suma todas las referencias que tengo despachadas de un cliente
        """
        sql = query_get_picking_quantity_by_customer(name_customer)
        try:
            self.cursor.execute(sql)
            data = self.cursor.fetchone()
            picking_quantity = {
                'quantity': data[0]
            }
            print("Consulta realizada con exito!")
            print(f"Resultado: {picking_quantity}\n")
            self.close()
            return picking_quantity
        except Exception as e:
            print(f"Ocurrio un error al consultar la base de datos.\nError: {e}\n")
            raise

    def get_request_quantity_by_customer(self, name_customer):
        """
        Suma todas las referencias que tengo solicitadas por un cliente
        """
        sql = query_get_request_quantity_by_customer(name_customer)
        try:
            self.cursor.execute(sql)
            data = self.cursor.fetchone()
            request_quantity = {
                'quantity': data[0]
            }
            print("Consulta realizada con exito!")
            print(f"Resultado: {request_quantity}\n")
            self.close()
            return request_quantity
        except Exception as e:
            print(f"Ocurrio un error al consultar la base de datos.\nError: {e}\n")
            raise

    def get_picking_quantity_by_saleorder(self, sale_order):
        """
        Suma todas las referencias que tengo despachadas de una orden de venta
        """
        sql = query_get_picking_quantity_by_saleorder(sale_order)
        try:
            self.cursor.execute(sql)
            data = self.cursor.fetchone()
            picking_quantity = {
                'quantity': data[0]
            }
            print("Consulta realizada con exito!")
            print(f"Resultado: {picking_quantity}\n")
            self.close()
            return picking_quantity
        except Exception as e:
            print(f"Ocurrio un error al consultar la base de datos.\nError: {e}\n")
            raise

    def get_request_quantity_by_saleorder(self, sale_order):
        """
        Suma todas las referencias que tengo solicitadas de una orden de venta
        """
        sql = query_get_request_quantity_by_saleorder(sale_order)
        try:
            self.cursor.execute(sql)
            data = self.cursor.fetchone()
            request_quantity = {
                'quantity': data[0]
            }
            print("Consulta realizada con exito!")
            print(f"Resultado: {request_quantity}\n")
            self.close()
            return request_quantity
        except Exception as e:
            print(f"Ocurrio un error al consultar la base de datos.\nError: {e}\n")
            raise
    
    def close(self):
        self.connection.close()