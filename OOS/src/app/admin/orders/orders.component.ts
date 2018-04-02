import { Component, OnInit } from '@angular/core';
import { OrdersService } from '../services/orders.service';
import { Router } from '@angular/router';
import { OrdersModel } from '../models/order';
import { SpinnerService } from '../../shared/services/spinner.service';
import { StatusOrder } from '../models/statusOrder';


@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  listOrders: Array<Object>
  listStatus = new Array<StatusOrder>()
  orderToDelete: OrdersModel;

  email: string = "";
  phone: string = "";
  page: number;
  pageSize: number;
  pageCount: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;

  pFirst: number;
  pCenter: number;
  pLast: number;
  active = "active";

  pages = new Array<number>();
  x: number;
  constructor(
    private ordersService: OrdersService,
    private router: Router,

    private spinnerService: SpinnerService) {
    this.listStatus.push(new StatusOrder(0, "Confirming"))
    this.listStatus.push(new StatusOrder(1, "Confirmed"))
    this.listStatus.push(new StatusOrder(2, "Shipping"))
    this.listStatus.push(new StatusOrder(3, "Shipped"))

  }



  ngOnInit() {
    this.getOrderList();

  }

  getOrderList() {
    this.pages = new Array<number>();
    this.spinnerService.startLoadingSpinner();
    this.ordersService.getList(this.email, this.phone, this.pageSize, this.page).subscribe(data => {
      this.spinnerService.turnOffSpinner();
      this.listOrders = data.items;
      this.pageCount = data.pageCount;
      this.hasNextPage = data.hasNextPage;
      this.hasPreviousPage = data.hasPreviousPage;
      // for(let i=0;i<data.pageCount;i++)
      // {
      //   this.pages[i] = i+1;
      // }
      this.getPages(data.page, data.pageCount, data.hasPreviousPage, data.hasNextPage);
      console.log(data);
    });
  }

  search() {
    this.getOrderList();
  }

  checkOdd(num: number)
  {
    if(num+1%2==0)
    {
      return false;
    }
    else{ return true}
  }

  getPages(page: number, pageCount: number, hasPreviousPage: boolean, hasNextPage: boolean) {
    this.x = 0;
    if (this.pages != null && pageCount > 3 && page < 3) {
      this.pages = new Array<number>();
      for (let i = 0; i < 3; i++) {
        this.pages[i] = i + 1;
      }
    }
    else {
      if (this.pages != null && pageCount > 3) {
        this.pages = new Array<number>();
        for (let i = 0; i < 3; i++) {
          this.pages[i] = i + 1;
        }
      }
    }
    if (pageCount <= 3) {
      this.pages = new Array<number>();
      for (let i = 0; i < pageCount; i++) {
        this.pages[i] = i + 1;
      }
    }

    if(page>=3 && this.checkOdd(page)==true && pageCount >= page+2 )
    {
      this.pages = new Array<number>();
      for (let i = page; i < page+2; i++) {
        this.pages[this.x] = i;
        this.x++;
      }
    }

    if(hasPreviousPage == false && pageCount > 3)
    {
      this.pages = new Array<number>();
      for (let i = page; i < 3; i++) {
        this.pages[i] = i + 1;
      }
    }
    
    if(hasPreviousPage == false && pageCount <= 3)
    {
      this.pages = new Array<number>();
      for (let i = page; i < pageCount; i++) {
        this.pages[i] = i + 1;
      }
    }

    if(hasNextPage == false && pageCount > 3)
    {
      this.pages = new Array<number>();
      for (let i = page-2; i < page; i++) {
        this.pages[this.x] = i;
        this.x++;
      }
    }

    if(hasNextPage == false && pageCount <= 3)
    {
      this.pages = new Array<number>();
      for (let i = 0; i < page; i++) {
        this.pages[i] = i + 1;
      }
    }

    if(page+2> pageCount && hasNextPage==true && hasPreviousPage == true)
    {
      this.pages = new Array<number>();
      for (let i = page-1; i < pageCount; i++) {
        this.pages[this.x] = i;
        this.x++;
      }
    }
    // if (hasNextPage == false && pageCount > 3) {
    //   this.pages = new Array<number>();
    //   for (let i = page - 2; i <= pageCount; i++) {
    //     this.pages[this.x] = i;
    //     this.x++;
    //   }
    // }

    // if (hasNextPage == true && page+2==pageCount) {
    //   this.pages = new Array<number>();
    //   for (let i = page; i <= pageCount; i++) {
    //     this.pages[this.x] = i;
    //     this.x++;
    //   }
    // }

    // if (hasNextPage == true && page+2>pageCount) {
    //   this.pages = new Array<number>();
    //   for (let i = page-1; i <= pageCount; i++) {
    //     this.pages[this.x] = i;
    //     this.x++;
    //   }
    // }


    // if (page + 2 > pageCount && hasPreviousPage == true) {
    //   this.pages = new Array<number>();
    //   for (let i = page - 1; i <= pageCount; i++) {
    //     this.pages[this.x] = i;
    //     this.x++;
    //   }
    // }

    // if (page + 2 > pageCount && hasPreviousPage == false) {
    //   this.pages = new Array<number>();
    //     for (let i = 0; i < 3; i++) {
    //       this.pages[this.x] = i + 1;
    //       this.x++;
    //     }
    // }

    // if (page + 2 == pageCount && page != this.pages[1]) {
    //   this.pages = new Array<number>();
    //   for (let i = page; i <= pageCount; i++) {
    //     this.pages[this.x] = i;
    //     this.x++;
    //   }
    // }

    // if (page + 2 == pageCount && page == this.pages[1]) {
    //   this.pages = new Array<number>();
    //   for (let i = page - 1; i <= pageCount; i++) {
    //     this.pages[this.x] = i;
    //     this.x++;
    //   }
    // }
  }

  changePage() {

  }

  getPage(page: number) {
    this.page = page;
    this.getOrderList();
  }

  getPageSize(pageSize: number) {
    if (this.pageSize != pageSize) {
      this.pageSize = pageSize;
      this.page = 1;
    }
    this.getOrderList();
  }

  choosePage(page: string) {

    // for (let i = 1; i <= page.totalPages; i++) {
    //   if (i === first || i === last || activePage === i
    //     || last < 5
    //     || activePage - 1 === i || (activePage < 3 && i < 4)
    //     || activePage + 1 === i || (activePage > last - 2 && i > last - 3)
    //   ) {
    //     pageNumbers = [...pageNumbers, i];
    //   }
    // }
    // if(page!=="next" && page!=="Previous")
    // {
    //     this.page = parseInt(page);
    //     console.log(this.page);
    // }
  }

  get(orderId) {
    this.ordersService.getById(orderId).subscribe(data => { this.orderToDelete = data });
  }

  delete() {
    this.spinnerService.startLoadingSpinner();
    this.ordersService.delete(this.orderToDelete.id).subscribe(() => {
      this.spinnerService.turnOffSpinner();
      this.getOrderList();
      console.log(this.orderToDelete.id);
    });
  }

  edit(order) {
    this.ordersService.sendData(order);
    this.router.navigateByUrl("/admin/manager/orders/edit/" + order.id);

  }

  updateStatus(order: OrdersModel) {
    this.spinnerService.startLoadingSpinner();
    this.ordersService.getById(order.id).subscribe(ord => {
      ord.status = order.status;
      this.ordersService.put(ord.id, ord).subscribe(data => {
        this.spinnerService.turnOffSpinner();
        console.log(order.status);
      });
    });

  }
}
