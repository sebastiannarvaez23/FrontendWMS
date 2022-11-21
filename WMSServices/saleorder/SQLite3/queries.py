def query_get_picking_quantity_by_customer(name_customer):
    sql = f"""
        SELECT 
            SUM(T3.quantity)
        FROM
            saleorder_saleorder T0
            INNER JOIN picking_picking T1 ON T0.id = T1.sale_order_id
            INNER JOIN box_box T2 ON T1.id = T2.picking_id
            INNER JOIN box_boxitem T3 ON T2.id = T3.box_id
        WHERE
            T0.customer_name = '{name_customer}'
    """
    return sql

def query_get_request_quantity_by_customer(name_customer):
    sql = f"""
        SELECT 
            SUM(T1.quantity)
        FROM
            saleorder_saleorder T0
            INNER JOIN saleorder_saleorderitem T1 ON T0.id = T1.sale_order_id
        WHERE
            T0.customer_name = '{name_customer}'
    """
    return sql

def query_get_picking_quantity_by_saleorder(sale_order):
    sql = f"""
        SELECT 
            SUM(T3.quantity)
        FROM
            saleorder_saleorder T0
            INNER JOIN picking_picking T1 ON T0.id = T1.sale_order_id
            INNER JOIN box_box T2 ON T1.id = T2.picking_id
            INNER JOIN box_boxitem T3 ON T2.id = T3.box_id
        WHERE
            T0.no_sale_order = '{sale_order}'
    """
    return sql

def query_get_request_quantity_by_saleorder(sale_order):
    sql = f"""
        SELECT 
            SUM(T1.quantity)
        FROM
            saleorder_saleorder T0
            INNER JOIN saleorder_saleorderitem T1 ON T0.id = T1.sale_order_id
        WHERE
            T0.no_sale_order = '{sale_order}'
    """
    return sql